<script>
	import CardCode from '$lib/components/CardCode.svelte';
	const progressCode = `<div style="--span:6;" class="s-grid">
	<div>				
		<div>
			<label><progress value=".7" max="1">70 %</progress></label>
		</div>
		<div>
			<progress role="presentation"></progress>
		</div>
	</div>
</div>`;
</script>

<!-- <input id="accordion-trigger-2" class="accordion-trigger-input" type="checkbox"></input>
  <label class="accordion-trigger" for="accordion-trigger-2">Accordion item 2
    </label>


    <section class="accordion-animation-wrapper">
      <div class="accordion-animation">
         
            <h2>Accordion content</h2>
            <p>This accordion content can be any height. It does not require fixed max-height, or any ways of transitioning height with Javascript. This content could be as long as it might and should resize and animate effortlessly.</p>
            <p>This should function smoothly in newest Webkit/Chromium browsers.</p>
      
      
      </div>
    </section> -->

<hgroup>
	<h1>Components</h1>
	<h2>Progress</h2>
</hgroup>

<article>
	<section>
		<code>progress</code> element without <code>value</code> attribute behaves as loader. You should
		use <code>role="presentation"</code> on the <code>progress</code> 'loader' element as it does not
		anymore represents progress in percents.
	</section>
	<CardCode code={progressCode} examplePosition="top"></CardCode>
</article>
