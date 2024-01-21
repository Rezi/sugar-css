#! /usr/bin/env node --experimental-modules

import * as path from 'path';
import * as sass from 'sass';

import { $, chalk, fs, question } from 'zx';

import cssnano from 'cssnano';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import which from 'which';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULTS = {
	COLUMN_WIDTH: 5,
	MAX_COLSPAN: 10
};

$.verbose = true;

function exitWithError(errorMessage) {
	console.error(`
${chalk.red(errorMessage)}`);
	process.exit(1);
}

async function checkRequiredProgramsExist(programs) {
	try {
		for (let program of programs) {
			await which(program);
		}
	} catch (error) {
		exitWithError(`Error: Required command ${error.message}`);
	}
}

async function readSugarScss(directory, filename) {
	const sugarScssPath = `${directory}/${filename}`;
	const indexContent = await fs.readFile(sugarScssPath);
	const importLines = indexContent.toString();

	const wholeScss = await importLines.split(/\r?\n/).reduce(async (accPromise, lineImport) => {
		let acc = await accPromise;

		if (lineImport) {
			const importedScssFileName = lineImport.replace("@import './", '').replace("';", '');

			const importedScssFileContent = await readSugarScssImport(
				targetDirectory,
				importedScssFileName + '.scss'
			);

			acc = acc + importedScssFileContent;

			return acc;
		}
		return Promise.resolve(acc);
	}, Promise.resolve(''));

	return wholeScss;
}

async function readSugarScssImport(directory, filename) {
	const sugarScssPath = `${directory}/${filename}`;
	const indexContent = await fs.readFile(sugarScssPath);
	const importedScss = indexContent.toString();

	return importedScss;
}

async function createAndWriteSugarCss(directory, contents) {
	const filepath = `${directory}/sugar.css`;

	await fs.writeFile(filepath, contents);
}

function replaceTexts(text, pairs) {
	return pairs.reduce((changedText, pair) => {
		return changedText.replace(pair[0], pair[1]);
	}, text);
}

await checkRequiredProgramsExist(['node', 'npx']);

const targetDirectory = path.resolve(__dirname, 'src/lib/scss');

if (!(await fs.pathExists(targetDirectory))) {
	exitWithError(`Error: Sugar source directory '${targetDirectory}' does not exist`);
}

const sugarScssText = await readSugarScss(targetDirectory, 'index.scss');

console.log(
	chalk.green.underline(`
WELCOME TO SUGAR.CSS BUILD TOOL
`)
);

const columnWidth = await question(
	`1) What is minimal ${chalk.yellow('width of one column')} in rem? ${chalk.magentaBright.italic(
		`(Recommended ${DEFAULTS.COLUMN_WIDTH})`
	)}
   `
);

const maxCollspan = await question(
	`
2) Across how many columns spans the widest element in the grid? ${chalk.magentaBright.italic(
		`(Recommended ${DEFAULTS.MAX_COLSPAN})`
	)}
   `
);

const replacePairs = [
	[
		'$grid-columns-count: 10;',
		`$grid-columns-count: ${parseInt(maxCollspan) || DEFAULTS.MAX_COLSPAN};`
	],
	[
		'$sugar-column-width: 5rem;',
		`$sugar-column-width: ${parseInt(columnWidth) || DEFAULTS.COLUMN_WIDTH}rem;`
	]
];

const sugarScssContentReplaced = replaceTexts(sugarScssText, replacePairs);

console.log(
	chalk.green.underline(`
BUILDING ...
`)
);

const compiledCss = await sass.compileStringAsync(sugarScssContentReplaced);

console.log(
	chalk.green.underline(`OPTIMIZING ...
`)
);

const postprocessedCss = await postcss([cssnano]).process(compiledCss.css, {
	from: undefined,
	to: undefined
});

createAndWriteSugarCss(path.resolve(''), postprocessedCss.css);

console.log(`DONE :) Find your file in ${path.resolve('')}/${chalk.yellow(`sugar.css`)}
`);

await $`exit 0`;
