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
		Hpts.tooltip.a = document.createElement('div');
		Hpts.tooltip.t = document.createElement('div');
		
		Hpts.tooltip.style.position = 'absolute';
		Hpts.tooltip.style.display = 'none';
		
		Hpts.tooltip.t.style.display = 'none';
		Hpts.tooltip.t.style.border = '1px solid black';
		Hpts.tooltip.t.style.borderRadius = '3px';
		Hpts.tooltip.t.style.padding = '5px';
		Hpts.tooltip.t.style.backgroundColor = '#edf';
		Hpts.tooltip.t.style.backgroundImage = 'none';
		Hpts.tooltip.t.style.width = 'auto';
		Hpts.tooltip.t.style.maxWidth = '217px';
		Hpts.tooltip.t.style.height = 'auto';
		Hpts.tooltip.t.style.boxShadow = '3px 3px 5px #666';
		
		Hpts.tooltip.a.style.marginBottom = '8px';
		Hpts.tooltip.a.style.width = '223px';
		Hpts.tooltip.a.style.height = '310px';
		Hpts.tooltip.a.style.boxShadow = '3px 3px 5px #666';
		Hpts.tooltip.a.style.borderRadius = '12px';
		
		Hpts.tooltip.appendChild(Hpts.tooltip.a);
		Hpts.tooltip.appendChild(Hpts.tooltip.t);
		document.body.appendChild(Hpts.tooltip);		
	},
	
	show_tooltip: function (e, dataset) {
		var x = e.clientX;
		var y = e.clientY;
		Hpts.tooltip.style.left = (x + 25) + 'px';
		Hpts.tooltip.style.top = (y + 25) + 'px';
		if (dataset.text) {
			Hpts.tooltip.t.style.display = 'block';
			Hpts.tooltip.t.innerHTML = dataset.text;
		} else Hpts.tooltip.t.style.display = 'none';
		if (dataset.magicid) {
			Hpts.tooltip.a.style.display = 'block';
			Hpts.tooltip.a.style.backgroundImage = 'url(\'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+dataset.magicid+'&type=card\')';
		} else Hpts.tooltip.t.style.display = 'none';
		
		Hpts.tooltip.style.display = 'block';
	},
	
	hide_tooltip: function (e) {
		Hpts.tooltip.style.display = 'none';
	}	
	
}

Hpts.affix_scripts();
