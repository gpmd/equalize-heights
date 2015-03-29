/**
 * equalize-heights.js
 */

/* ==========================================================================
   Equalize heights plugin
   ========================================================================== */

;(function ($, window, document, undefined) {

    $.fn.equalizeHeights = function(options) {

        // Default settings
        var settings = $.extend({
            childElement: ''
        }, options);

        var s = document.body || document.documentElement, s = s.style; // jshint ignore:line

        var $list = this,
            $items = $list.find(settings.childElement),
            setHeights = function() {
                $items.css('height', 'auto');
                var perRow = Math.floor($list.width() / $items.width());
                if(perRow === null || perRow < 2) return true;
                for(var i = 0, j = $items.length; i < j; i += perRow) {
                    var maxHeight = 0,
                        $row = $items.slice(i, i + perRow);
                    /* jshint ignore:start */
                    $row.each(function() {
                        var itemHeight = parseInt($(this).outerHeight());
                        if (itemHeight > maxHeight) maxHeight = itemHeight;
                    });
                    /* jshint ignore:end */
                    $row.css('height', maxHeight);
                }
            };

        // Trigger setHeights function
        setHeights();

        // Trigger on window resize
        var resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setHeights, 50);
        });
    };

})(jQuery, window, document);
