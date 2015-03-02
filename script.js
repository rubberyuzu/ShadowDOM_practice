window.onload = function(){

	var host = document.querySelector('button');
	var root = host.createShadowRoot();
	root.textContent = 'Coming! COMING!';

	var shadow = document.querySelector("#nameTag").createShadowRoot();
	var template = document.querySelector('#nameTagTemplate');
	var clone = document.importNode(template.content, true);
	shadow.appendChild(clone);
};
