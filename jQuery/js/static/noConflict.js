import jQuery from './../jQuery.js';

/**
 * 释放jQuery库占用的$全局变量控制权，以及deep为true时，释放jQuery库占用的jQuery全局变量控制权
 * @param  {Boolean} isReleasejQuery 是否是否jQuery变量控制权
 * @return {Object}       			 jQuery函数
 */
const noConflict = (isReleasejQuery = false) => {
	// 释放jQuery对$全局变量的控制权
	if (window.$ === jQuery) {
		window.$ = undefined;
	}
	// 释放jQuery对jQuery全局变量的控制权
	if(isReleasejQuery && window.jQuery === jQuery){
		window.jQuery = undefined;
	}

	return jQuery;
};

jQuery.noConflict = noConflict;
