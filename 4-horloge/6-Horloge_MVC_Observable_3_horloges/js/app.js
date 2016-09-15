// var heure = 0;
// var minute = 0;
// var seconde = 0;

// function display(){
// 	document.getElementById('heure').innerHTML = heure;
// 	document.getElementById('minute').innerHTML = minute;
// 	document.getElementById('seconde').innerHTML = seconde;
// }

// function businessRules(){
// 	if(seconde >= 60){
// 		seconde = 0;
// 		minute++;
// 	}

// 	if(minute >= 60){
// 		minute = 0;
// 		heure++;
// 	}

// 	if(heure >= 24){
// 		heure = 0;
// 	}

// 	if(seconde < 0){
// 		seconde = 59;
// 		minute--;
// 	}

// 	if(minute < 0){
// 		minute = 59;
// 		heure--;
// 	}

// 	if(heure < 0){
// 		heure = 23;
// 	}
// }


// window.onload = function(){

// 	document.getElementById('splus').addEventListener('click', function(e){
// 		seconde++;
// 		businessRules();
// 		display();
// 	});

// 	document.getElementById('sminus').addEventListener('click', function(e){
// 		seconde--;
// 		businessRules();
// 		display();
// 	});

// 	document.getElementById('mplus').addEventListener('click', function(e){
// 		minute++;
// 		businessRules();
// 		display();
// 	});

// 	document.getElementById('mminus').addEventListener('click', function(e){
// 		minute--;
// 		businessRules();
// 		display();
// 	});

// 	document.getElementById('hplus').addEventListener('click', function(e){
// 		heure++;
// 		businessRules();
// 		display();
// 	});

// 	document.getElementById('hminus').addEventListener('click', function(e){
// 		heure--;
// 		businessRules();
// 		display();
// 	});

// 	document.getElementById('toDate').addEventListener('click', function(e){
// 		var d = new Date();
// 		heure = d.getHours();
// 		minute = d.getMinutes();
// 		seconde = d.getSeconds();

// 		display();
// 	});

// 	document.getElementById('stop').addEventListener('click', function(e){
// 		if(nb){
// 			clearInterval(nb);
// 			nb= 0;
// 		}
// 		else{
// 			nb = start();
// 		}
// 	});
// };

// function start(){
// 	return setInterval(function(){
// 		seconde++;
// 		businessRules();
// 		display();
// 	}, 1000);
// }

// var nb = start();

var imie = {
	models: {},
	controllers: {},
	views: {},
	libs: {},
	start: function(){
		var clock1 = new this.models.Clock();
		var clock2 = new this.models.Clock();
		var clock3 = new this.models.Clock();
		var clockView1 = new this.views.ClockView(clock1);
		var clockView2 = new this.views.ClockView(clock2);
		var clockView3 = new this.views.ClockView(clock3);
		var clockController1 = new this.controllers.ClockController(clock1);
		var clockController2 = new this.controllers.ClockController(clock2);
		var clockController3 = new this.controllers.ClockController(clock3);

		// View observe Model
		clock1.attach(clockView1);
		clock2.attach(clockView2);
		clock3.attach(clockView3);

		// Controller observe View
		clockView1.attach(clockController1);
		clockView2.attach(clockController2);
		clockView3.attach(clockController3);

		clock1.start();
		clock2.start();
		clock3.start();
	}
};