// ici déclarations et instanciations 
var clock = new Clock();
var view = new ClockView(clock);
var ctrl = new ClockController(clock, view);

//On ajoute la "couche pattern Observer" ici 
//ce sont les "abonnements" que lon initialise ci-dessous
clock.addObserver(view); // la vue observe le modele
view.addObserver(ctrl); // le controleur observe la vue
