import jQuery from './jQuery.js';


// jQuery 默认占据两个全局变量jQuery、$
globalThis.$ = globalThis.jQuery = jQuery;


console.dir(jQuery);
