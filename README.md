# equalize-heights

> A simple jQuery plugin for equalizing the heights of elements in a row.

When combined with Modernizr feature detection this plugin can be used as part of a fallback for browsers that do not support `flexbox`. The plugin includes a check for window resize events and adjusts the heights accordingly.

**Note: I did not write this code - if you know the source let me know and I will attribute it.**

## Install

```bash
$ bower install --save equalize-heights
```

### Usage Example

Target your grid wrappers and grid cells.

```javascript
var gridWrapper = $('.grid-wrapper');

if (gridWrapper.length) {
    gridWrapper.each(function() {
        $(this).equalizeHeights({
            childElement: ".grid-cell"
        });
    });
}
```
