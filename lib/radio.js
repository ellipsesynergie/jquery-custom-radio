/*
 *  Project: jQuery Checkbox
 *  Description: A jQuery plugin to generate custom checkbox and radio buttons
 *  Author: Ellipse Synergie
 *  License: MIT
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "radio";
    var defaults = {
    };
    
    // Constructor
    function Radio(element, options) {
    
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Radio.prototype = {

        init: function() {

            var _group = $(this.element);

            $.each(_group.find('input'), function(index, input) {

                $(input).hide();

                if ($(input).attr('checked') == 'checked') {
                    $(input).after('<i class="icon-check"></i> ');
                } else {
                    $(input).after('<i class="icon-check-empty"></i> ');
                }
            
                $(input).on('change', function() {

                    _group.find('i').removeClass('icon-check');
                    _group.find('i').addClass('icon-check-empty');

                    if ($(this).prop('checked') === true) {
                        $(this).next().removeClass('icon-check-empty');
                        $(this).next().addClass('icon-check');
                    } else {
                        $(this).next().removeClass('icon-check');
                        $(this).next().addClass('icon-check-empty');
                    }
                });
            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Radio(this, options));
            }
        });
    };
    
})(jQuery, window, document);
