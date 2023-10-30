import jQuery from './../jQuery.js';

const rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// 去掉字符串左右两侧的空白字符
const trim = text => {
	if([null, undefined].includes(text)) return '';

    return String(text).replace(rtrim, '$1');
};

jQuery.trim = trim;
