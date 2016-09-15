imie.models.Clock = (function(){
	'use strict';

	// Dependencies
	var Observable = imie.libs.Observable;

	function Clock(){
		Observable.call(this);
		this.hour = 0;
		this.minute = 0;
		this.second = 0;
		this.clockInterval = 0;
	}

	Clock.prototype = Object.create(Observable.prototype);
	Clock.prototype.constructor = Clock;

	Clock.prototype.addHour = function(){
		this.hour +=1;
		this.businessRules();
	};

	Clock.prototype.minusHour = function(){
		this.hour -= 1;
		this.businessRules();
	};

	Clock.prototype.addMinute = function(){
		this.minute += 1;
		this.businessRules();
	};

	Clock.prototype.minusMinute = function(){
		this.minute -=1;
		this.businessRules();
	};

	Clock.prototype.addSecond = function(){
		this.second += 1;
		this.businessRules();
	};

	Clock.prototype.minusSecond = function(){
		this.second -= 1;
		this.businessRules();
	};

	Clock.prototype.businessRules = function (){
		if(this.second >= 60){
			this.second = 0;
			this.minute++;
		}

		if(this.minute >= 60){
			this.minute = 0;
			this.hour++;
		}

		if(this.hour >= 24){
			this.hour = 0;
		}

		if(this.second < 0){
			this.second = 59;
			this.minute--;
		}

		if(this.minute < 0){
			this.minute = 59;
			this.hour--;
		}

		if(this.hour < 0){
			this.hour = 23;
		}

		if(this.hour === 0 && this.second === 0 && this.minute === 0 && this.reverse){
			this.stop();
		}

		this.notify({cmd: 'clockChanged'});
	}

	Clock.prototype.start = function(){
		this.clockInterval = setInterval(this.addSecond.bind(this), 1000);
	};

	Clock.prototype.startReverse = function(){
		this.clockInterval = setInterval(this.minusSecond.bind(this), 1000);
		this.reverse = true;
	};

	Clock.prototype.stop = function(){
		clearInterval(this.clockInterval);
		this.reverse = false;
	};

	Clock.prototype.toDate = function(){
		var d = new Date();

		this.hour = d.getHours();
		this.minute = d.getMinutes();
		this.second = d.getSeconds();

		this.notify({cmd: 'clockChanged'});
	};

	return Clock;
}).call(this);