var model = new Model();

var view = new View(model);//La vue connaît le modèle

var ctrl = new AppController(model, view);//Le contrôleur connaît la vue et le modèle

var cpt = new Compteur(model);

//La vue observe le modèle et est observée par le contrôleur
//Le modèle est observé par la vue
model.addObserver(view);
model.addObserver(cpt);
//Le contrôleur observe la vue
//La vue est observée par le controleur
view.addObserver(ctrl);
