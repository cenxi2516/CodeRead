import jQuery from './jQuery.js';
import './static/noConflict.js';


// jQuery 默认占据两个全局变量jQuery、$
globalThis.$ = globalThis.jQuery = jQuery;

// 将jQuery函数原型赋值给fn属性
jQuery.fn = jQuery.prototype;


console.dir(jQuery);
