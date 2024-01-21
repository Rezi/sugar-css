<script>
	import { page } from '$app/stores';
</script>

{$page.status}: {$page?.error?.message}

{#if $page.status >= 400 && $page.status < 500}
	<h1>{$page.status} - The Quest for the Lost Page</h1>

	<p class="capital">
		Once upon a time in the kingdom of Cyberspace, there was a lost page that held the key to the
		entire realm's information. The wise king, recognizing its importance, sent his brave and
		tech-savvy son, Prince Server, on a quest to find it.
	</p>
	<p>
		Armed with his trusty search engine and a map of codes, Prince Server embarked on a perilous
		journey through the tangled forests of HTML and the treacherous mountains of broken links. After
		days of searching, he stumbled upon a mysterious castle guarded by the enigmatic Princess {$page.status}.
	</p>
	<p>
		Princess {$page.status}, named after the fabled error code, was known for her elusive nature.
		Her castle was surrounded by an aura of uncertainty, and many had tried to reach her but failed.
		Undeterred, Prince Server approached her with determination and charm.
	</p>
	<p>
		<img src="/imgs/tale-400.png" alt="" class="tale-img" />
		To his surprise, Princess {$page.status} was not a foe but a captive of her own castle, trapped by
		a wicked sorcerer named Glitch. Prince Server vowed to free her from this digital prison and, with
		his coding skills, began dismantling the glitches and errors that bound her.
	</p>
	<p>
		As the last line of code was corrected, Princess {$page.status} transformed into a radiant beauty.
		Grateful for her rescue, she and Prince Server discovered a connection that went beyond algorithms
		and databases. Love blossomed in the kingdom of Cyberspace as the lost page was found, and a royal
		wedding was celebrated, uniting the realms of technology and romance.
	</p>
	<p>
		And so, Prince Server and Princess {$page.status} ruled over Cyberspace, ensuring that no page would
		be lost again, and their union became a legendary tale told in every byte and pixel of the digital
		kingdom.
	</p>
{:else if $page.status >= 500 && $page.status < 600}
	<h1>Error {$page.status} - The Dark lord</h1>

	<p class="capital">
		Once upon a time in the vast digital kingdom, there lived a noble prince named Server. He was
		the guardian of the internet, ensuring the smooth functioning of the kingdom's online
		activities. Prince Server, with his sleek and powerful computer, hosted the entire realm's data
		and connections. However, there was one thing missing from his life – a companion to share his
		digital adventures.
	</p>
	<p>
		<img src="/imgs/tale-500.png" alt="" class="tale-img" />
		One fateful day, as Prince Server was sipping on his morning coffee while scrolling through the kingdom's
		social networks, disaster struck. The cup slipped from his grasp, and the hot liquid cascaded over
		his computer, rendering it useless. Panic swept through the kingdom as error messages spread like
		wildfire – a kingdom-wide {$page.status} error, leaving everyone disconnected.
	</p>
	<p>
		Determined to restore order, Prince Server embarked on a quest to find a solution. The wise
		digital seers spoke of a legendary computer, the only one of its kind, belonging to the Dark
		internet lord. Undeterred by the ominous tales surrounding the Dark lord's machine, Prince
		Server set forth on a perilous journey to obtain it.
	</p>
	<p>
		Upon reaching the Dark lord's lair, Prince Server faced a fierce battle. With a real sword in
		one hand and shield in the other, he fought valiantly against the Dark lord's malicious
		algorithms. In the midst of the struggle, Prince Server discovered a captive princess named
		Firewall, held hostage by the Dark lord. Determined to rescue her and save the kingdom, Prince
		Server mustered all his strength.
	</p>
	<p>
		In a triumphant moment, Prince Server defeated the Dark lord, liberated Princess Firewall, and
		gained possession of the powerful computer. With the princess by his side, he not only mended
		the kingdom's internet but also found the companion he had been seeking. Prince Server and
		Princess Firewall ruled the digital realm together, ensuring a happily ever after for all their
		subjects.
	</p>
{/if}

<style>
	.capital {
		--capital-spacing: 2rem;
		padding-top: var(--capital-spacing);
	}
	.capital::first-letter {
		font-size: 7rem;
		float: left;
		line-height: 1;
		padding-right: 1rem;
		margin-top: calc(-1 * var(--capital-spacing));
	}

	.tale-img {
		width: 20rem;
		float: left;
		padding-right: 1rem;
	}
</style>
