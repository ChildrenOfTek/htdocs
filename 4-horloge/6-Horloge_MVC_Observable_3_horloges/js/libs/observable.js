imie.libs.Observable = (function(){
	'use strict';

	function Observable(){
		this.observers = [];
	}

	// Add an obsserver
	Observable.prototype.attach = function(obs){
		this.observers.push(obs);
	};

	// Remove an observer
	Observable.prototype.detach = function(obs){
		// Get obs idx in my observer array
		var idx = this.observers.indexOf(obs);

		if(idx !== -1){
			this.observers.splice(idx, 1);
		}
	};

	// Notify all the observers
	Observable.prototype.notify = function(event){
		this.observers.forEach(function(obs){
			// Call update in the obs context
			obs.update.call(obs, event);
		});
	};

	return Observable;
}).call(this);
