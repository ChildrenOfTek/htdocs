imie.views.ClockView = (function(){
	'use strict';

	//dependencies
	var Observable = imie.libs.Observable;

	function ClockView(clock){
		Observable.call(this);
		this.clock = clock;
		this.container;
		this.time;

		this.buttons = [];

		this.init();

		this.addListeners();
	}

	ClockView.prototype = Object.create(Observable.prototype);
	ClockView.prototype.constructor = ClockView;

	// Dom component initialisation
	ClockView.prototype.init = function(){
		this.container = document.createElement('div');
		this.time = document.createElement('div');
		var hplus = document.createElement('button');

		var buttons = {
			'hplus' : '+',
			'hminus' : '-',
			'mplus' : '+',
			'mminus' : '-',
			'splus' : '+',
			'sminus': '-'
		};

		this.container.appendChild(this.time);

		for(var className in buttons){
			var btn = document.createElement('button');
			btn.appendChild(document.createTextNode(buttons[className]));
			btn.className = className;
			this.buttons.push(btn);
			this.container.appendChild(btn);
		};

		document.body.appendChild(this.container);

	};

	// Adding buttons listeners
	ClockView.prototype.addListeners = function(){
		for(var ii = 0; ii < this.buttons.length; ii++){
			this.buttons[ii].addEventListener('click', function(e){
				this.notify({cmd: e.currentTarget.className});
			}.bind(this));
		}
	};

	ClockView.prototype.update = function(event){
		if(event.cmd === 'clockChanged'){
			this.display();
		}
	};

	ClockView.prototype.display = function(){
		this.time.innerHTML = this.clock.hour + ':' + this.clock.minute + ':' + this.clock.second;
	};

	return ClockView;
}).call(this);