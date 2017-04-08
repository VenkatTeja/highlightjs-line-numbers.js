# highlightjs-line-numbers.js [![version](http://img.shields.io/badge/alpha-v2.0.0-brightgreen.svg?style=flat)](https://github.com/wcoder/highlightjs-line-numbers.js/archive/master.zip)

Highlight.js line numbers plugin.

[DEMO](http://wcoder.github.io/highlightjs-line-numbers.js/) | [SСREENSHOTS](https://github.com/wcoder/highlightjs-line-numbers.js/issues/5)

## Install

#### Bower
```
bower install highlightjs-line-numbers.js
```

#### Npm
```
npm install highlightjs-line-numbers.js
```

## Usage

Download plugin and include file after highlight.js:
```html
<script src="path/to/highlight.min.js"></script>

<script src="path/to/highlightjs-line-numbers.min.js"></script>
```

Adding styles:
```css
.hljs-line-numbers b {
	display: inline-block;
	text-align: right;
	float: left;
	margin-left: -30px;
	width: 25px;
	color: #999;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.hljs-line-numbers > div {
	border-left: 1px solid #ccc;
	padding-left: 10px;
}
pre, code {
	white-space: pre-wrap;
	padding-left: 20px;
}
```

Initialize plugin after highlight.js:
```js
hljs.initHighlightingOnLoad();

hljs.initLineNumbersOnLoad();
```

Here’s an equivalent way to calling `initLineNumbersOnLoad` using jQuery:
```js
$(document).ready(function() {
	$('code.hljs').each(function(i, block) {
		hljs.lineNumbersBlock(block);
	});
});
```

---
&copy; 2015 Yauheni Pakala | MIT License
