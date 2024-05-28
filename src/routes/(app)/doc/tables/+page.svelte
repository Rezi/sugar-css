<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const code = `
<table>
	<caption>
    	Favorites by topic
  	</caption>
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
		<tr>
			<th>3</th>
			<td>Watermelon</td>
			<td>Kangaroo</td>
			<td>Iron Man</td>
			<td>Green</td>
		</tr>
	
	</tbody>
	<tfoot>
		<tr>
			<th aria-hidden="true"></th>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
	</tfoot>
</table>`;
</script>

<svelte:head>
	<title>Tables | Sugar.css</title>
	<meta name="description" content="Sugar.css - Tables" />
</svelte:head>

<h1>Tables</h1>

<article>
	<h2>Example</h2>
	<CardCode {code} card={false} examplePosition="top"></CardCode>

	Please use <code>tbody</code>, <code>thead</code> and <code>tfoot</code> for better accessibility.
</article>

<style>
</style>
