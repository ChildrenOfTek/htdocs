// TODO
var model = new Clock();

var view = new ClockView(model);//La vue connaît le modèle

var ctrl = new ClockController(model, view);//Le contrôleur connaît la vue et le modèle


// model.addObserver(view);
// view.addObserver(ctrl);

function start(model,view){
    setInterval(function(){
        model.setSeconds(model.s+1);
        view.display(model);
    }, 1000);
}
start(model,view);