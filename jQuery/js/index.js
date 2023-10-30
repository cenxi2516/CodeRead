import jQuery from './jQuery.js';

// jQuery静态成员
import './static/noConflict.js';
import './static/trim.js';

jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.now = Date.now;


// jQuery 默认占据两个全局变量jQuery、$
globalThis.$ = globalThis.jQuery = jQuery;

// 将jQuery函数原型赋值给fn属性
jQuery.fn = jQuery.prototype;


console.dir(jQuery);
