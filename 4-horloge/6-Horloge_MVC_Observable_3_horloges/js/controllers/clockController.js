imie.controllers.ClockController = (function(clock, clockView){
	'use strict';

	function ClockController(clock, clockView){
		this.clock = clock;
		this.clockView = clockView;
	}

	ClockController.prototype.update = function(event){
		this[event.cmd + 'Action'];
		if(typeof this[event.cmd + 'Action'] === 'function'){
			this[event.cmd + 'Action'](event);
		}
	};

	ClockController.prototype.hplusAction = function(){
		this.clock.addHour();
	};

	ClockController.prototype.hminusAction = function(){
		this.clock.minusHour();
	};

	ClockController.prototype.mplusAction = function(){
		this.clock.addMinute();
	};

	ClockController.prototype.mminusAction = function(){
		this.clock.minusMinute();
	};

	ClockController.prototype.splusAction = function(){
		this.clock.addSecond();
	};

	ClockController.prototype.sminusAction = function(){
		this.clock.minusSecond();
	};

	ClockController.prototype.toDateAction = function(){
		this.clock.toDate();
	};

	return ClockController;
}).call(this);