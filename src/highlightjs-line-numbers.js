(function (w) {
	'use strict';

	if (typeof w.hljs === 'undefined') {
		console.error('highlight.js not detected!');
	} else {
		w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
		w.hljs.lineNumbersBlock = lineNumbersBlock;
	}

	function initLineNumbersOnLoad () {
		if (document.readyState === 'complete') {
			documentReady();
		} else {
			w.addEventListener('DOMContentLoaded', documentReady);
		}
	}

	function documentReady () {
		try {
			var blocks = document.querySelectorAll('code.hljs');

			for (var i in blocks) {
				if (blocks.hasOwnProperty(i)) {
					lineNumbersBlock(blocks[i]);
				}
			}
		} catch (e) {
			console.error('LineNumbers error: ', e);
		}
	}

	function lineNumbersBlock (element) {
		if (typeof element !== 'object') return;

		var lines = getLines(element.innerHTML);

		if (lines.length > 1) {
			var l = '';

			for (var i = 0; i < lines.length; i++) {
		
				l += '<div class="hljs-line-numbers">' +
						'<b>' + (i + 1) + '</b>' +
						'<div>' + (lines[i].length > 0 ? lines[i] : ' ') + '</div>' +
					'</div>';
			}

			element.parentNode.innerHTML = l;
		}
	}

	function getLines(text) {
		if (text.length === 0) return [];

		return text.split(/\r\n|\r|\n/g);
	}
}(window));