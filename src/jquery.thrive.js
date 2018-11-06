/**
 * @file: jquery plugin 'thrive'
 * @version: 1.0.0
 * 
 * @author: effone <https://eff.one>
 * @repository: https://github.com/effone/jquery.thrive
 * @licence: MIT
 */

;(function ($) {
    $.fn.thrive = function (opts) {
        if (this.length > 1) {
            this.each(function () { $(this).thrive(opts) });
            return this;
        }
        
        var conf = $.extend({
            style: '',
            spin: true,
            sig: '',
            pre: function(){},
            post: function(){}
        }, opts, $(this).data());
        
        var thrive = $(this);
        var text = $.trim(thrive.text());

        this.init = function () {
            thrive.addClass('thrive' + (conf.spin ? ' spin' : '')).prepend('<div class="' + conf.style + '">');
            return this;
        };

        this.progress = function (val) {
            // if (isNaN(val)) val = 0;
            var txt = conf.sig !== '';
            if (val > 0 && val < 1) {
                if (!thrive.hasClass('on')) {
                    thrive.addClass('on');
                    conf.pre();
                    if(txt) thrive.html(thrive.html().replace(text,conf.sig));
                }
                thrive.find('div').css('width', (val * 100) + '%');
            } else {
                thrive.removeClass('on').find('div').css('width', '0%');
                if(txt) thrive.html(thrive.html().replace(conf.sig, text));
                conf.post();
            }
        };
        return this.init();
    }
})(jQuery);