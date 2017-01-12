Hpts = {
	on_load: function (f) {
		window.addEventListener('load', f)
	},
	
	add_script: function (x) {
		x.my_tooltip = function (e) {
			Hpts.show_tooltip(e, x.dataset)
		}
		x.addEventListener("mouseover", x.my_tooltip);
		x.addEventListener('mouseout', Hpts.hide_tooltip);
	},
	
	affix_scripts: function () {
		Hpts.create_tooltip();
		
		var elems = document.getElementsByClassName('tipped');
				
		for (var i=0;i<elems.length;i++) {
			Hpts.add_script(elems[i]);
		}
		
	},
	
	create_tooltip: function () {
		Hpts.tooltip = document.createElement('div');
		Hpts.tooltip.style.position = 'absolute';
		Hpts.tooltip.style.display = 'none';
		Hpts.tooltip.style.backgroundColor = '#edf';
		document.body.appendChild(Hpts.tooltip);
	},
	
	show_tooltip: function (e, dataset) {
		var c = e.currentTarget;
		var x = (c.offsetLeft - c.scrollLeft + c.clientLeft + c.clientWidth + 10)
		var y = (c.offsetTop - c.scrollTop + c.clientTop + c.clientHeight + 10);
		Hpts.tooltip.style.left = (x + 25) + 'px';
		Hpts.tooltip.style.top = (y + 25) + 'px';
		Hpts.tooltip.innerHTML = '';
		if (dataset.text) {
			Hpts.tooltip.style.border = '1px solid black';
			Hpts.tooltip.style.borderRadius = '3px';
			Hpts.tooltip.style.padding = '5px';
			Hpts.tooltip.style.backgroundColor = '#edf';
			Hpts.tooltip.style.backgroundImage = 'none';
			Hpts.tooltip.style.width = '300px';
			Hpts.tooltip.style.height = 'auto';
			Hpts.tooltip.innerHTML = dataset.text;
		}
		if (dataset.magicid) {
			Hpts.tooltip.style.border = 'none';
			Hpts.tooltip.style.padding = '0px';
			Hpts.tooltip.style.backgroundColor = 'transparent';
			Hpts.tooltip.style.backgroundImage = 'url(\'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+dataset.magicid+'&type=card\')';
			Hpts.tooltip.style.width = '223px';
			Hpts.tooltip.style.height = '310px';
		}
		
		Hpts.tooltip.style.display = 'block';
	},
	
	hide_tooltip: function (e) {
		Hpts.tooltip.style.display = 'none';
	}	
	
}
