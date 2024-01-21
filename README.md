# [Sugar.css](https://sugar-css.com)

*Semantic, accessible, lightweight CSS framework.*

Sugar.css is like a very advanced and opinionated CSS reset with zero selectivity. It can be easily combined with utility classes or custom CSS.

**Semantic**
Except for 5 classes, all styles are applied based on semantic HTML and aria attributes. This way, accessible and easy-to-read HTML is encouraged.

**Customizable**
You can easily adjust the look and feel of your very own build of Sugar.css

[Customize your Sugar.css](https://sugar-css.com/customize)

**Lightweight**
The whole framework is less than 10KB g-zipped. Including advanced grid system and custom properties to customize.

## Install

-   Customize online and [download](https://sugar-css.com/customize). 
-   install by npm and use `sugar-css/dist/index.scss`
-   build via command line `npx sugar-css` (this way grid column width can be modified)
-   Download from a cdn   

## Usage

### Browser Support

Sugar.css should be used with the most modern browsers. All features used by Sugar CSS have 90% + support in the most recent versions of Chrome, Safari, Firefox and many Chromium-based browsers.

These are the most recent CSS features used by Sugar.css:
`:has(), :with(), aspect-ratio, color-mix(), @container queries, CSS grid`. Check on your own what is their current browser support.

### Mindset

Sugar.css can be, with exceptions of following classes `.s-dark, .s-light, .s-outline, .s-secondary, .s-grid .s-fixed, .s-container`, considered as CSS reset. All styles applied by Sugar.css use :where() pseudo-selector, which does not add any specificity to its selector. This way user can overwrite any Sugar.css style without dealing with specificity issues. Also, there is no need to keep Sugar.css in a separate layer and write custom code in another.

Sugar.css tries to be as simple as possible and keep its size down (below 10KB minified).

### Use cases

Sugar.css is suitable for projects where:

- Design is based on rules rather than feelings.
- Design is less important than readability/accessibility.
- Rules are preferred over exceptions.

Sugar.css can be used as a base even for huge projects. You should then consider not only changing the provided custom properties but also modifying the Sugar.css source code.