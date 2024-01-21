<script>
	import Accessibility from '$lib/components/Accessibility.svelte';
	import Downloader from '$lib/components/Downloader.svelte';
	import EncoderDecoder from '$lib/components/EncoderDecoder.svelte';
</script>

<section>
	<Accessibility></Accessibility>
	<article>
		<details>
			<summary role="button">Download CSS (customized)</summary>
			<div>
				<Downloader></Downloader>
			</div>
		</details>
	</article>

	<article>
		<details>
			<summary role="button">Import / Export</summary>
			<div>
				<EncoderDecoder></EncoderDecoder>
			</div>
		</details>
	</article>
</section>

<article>
	<header><h2>Example to play with</h2></header>
	<form>
		<fieldset>
			<legend>Form</legend>
			<div style="--span:2;" class="s-grid">
				<div style="align-items: end;">
					<label>
						<input type="radio" name="color" value="blue" />
						Blue
					</label>
					<div>
						<label><input type="checkbox" />Checkbox</label>
					</div>
					<div style="font-size:0"><input type="range" min="0" max="100" /></div>
					<div>
						<progress value=".7" max="1">70 %</progress>
					</div>
					<div>
						<progress></progress>
					</div>
					<label>
						With tooltip
						<input aria-describedby="username-tooltip" type="text" />
						<div role="tooltip" id="username-tooltip">Username cannot be an email</div>
					</label>
					<search style="--span:4;">
						<input type="search" name="" aria-label="Search" /><button type="submit">Search</button>
					</search>

					<label>
						Email
						<input type="email" placeholder="Email" aria-invalid="true" />
					</label>
					<label>
						Valid
						<input type="text" placeholder="Email" aria-invalid="false" />
					</label>
					<div style="--span:4"><input type="file" /></div>

					<div><input type="text" placeholder="Disabled" disabled /></div>
					<div>
						<select>
							<option value="1">Ape</option>
							<option value="2">Elephant</option>
							<option value="3">Jaguar</option>
						</select>
					</div>
					<div><button aria-busy="true">Submit</button></div>
				</div>
			</div>
		</fieldset>
	</form>
	<hr />
	<div style="--span:2;" class="s-grid">
		<div style="align-items: end;">
			<div><a href="#">Link</a></div>
			<div><a aria-busy="true" href="#">Link</a></div>
			<div><mark>Highlight</mark></div>
			<div><del>Del text</del></div>
			<div><ins>Ins text</ins></div>
			<div><code>Code text</code></div>
			<div><strong>Code text</strong></div>
			<div>Regular text</div>
		</div>
	</div>
	<hr />

	<div style="--span:2;" class="s-grid">
		<div style="align-items: start;">
			<div>
				<h1>h1</h1>
				<span>After margin</span>
			</div>
			<div>
				<h2>h2</h2>
				<span>After margin</span>
			</div>
			<div>
				<h3>h3</h3>
				<span>After margin</span>
			</div>
			<div>
				<h4>h4</h4>
				<span>After margin</span>
			</div>
		</div>
	</div>

	<hr />

	<nav aria-label="breadcrumb">
		<ol>
			<li>
				<a href="#accessibility"> Accessibility </a>
			</li>
			<li>
				<a href="#accessibility/nav"> Navigation </a>
			</li>
			<li>
				<a href="#accessibility/nav/breadcrumb" aria-current="page"> Breadcrumb </a>
			</li>
		</ol>
	</nav>

	<hr />

	<nav>
		<a href="/">Navigation</a>
		<menu>
			<li><a href="/doc">Getting started</a></li>
			<li><a href="https://github.com/">Github</a></li>
		</menu>
	</nav>

	<hr />

	<div class="s-grid">
		<div>
			<div>
				<blockquote cite="https://...">
					An unexamined life is not worth living
					<footer>
						Socrates,
						<cite>Plato's Apology (38a5–6)</cite>
					</footer>
				</blockquote>
			</div>

			<section style="height:100%" aria-busy="true"></section>
		</div>
	</div>

	<hr />

	<section>
		<details>
			<summary>Open for Instant Smiles, Handle With Glee!</summary>
			Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace for
			grins!
		</details>
		<details>
			<summary>Open for Instant Smiles, Handle With Glee!</summary>
			Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace for
			grins!
		</details>
	</section>

	<details>
		<summary role="button">Open for Instant Smiles, Handle With Glee!</summary>
		Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace for
		grins!
	</details>

	<hr />

	<div>
		<table>
			<caption> Favorites by topic </caption>
			<thead>
				<tr>
					<th>No.</th>
					<th>Fruit</th>
					<th>Animal</th>
					<th>Superhero</th>
					<th>Color</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>Apple</td>
					<td>Penguin</td>
					<td>Spider-Man</td>
					<td>Blue</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Banana</td>
					<td>Sloth</td>
					<td>Wonder Woman</td>
					<td>Yellow</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th></th>
					<td>✓</td>
					<td>✓</td>
					<td>✓</td>
					<td>✓</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<footer>footer</footer>
</article>
