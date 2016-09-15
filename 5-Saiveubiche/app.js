// app.js
var modelVoiture = new FireVoiture();
var modelPieton = new FirePieton();

var view = new FireView(modelVoiture,modelPieton);

var ctrl = new FireController(modelVoiture,modelPieton,view);

