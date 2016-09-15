// /controllers/AppController.js

function AppController(model, view,cpt){
  this._model = model;
  this._view = view;
}

AppController.prototype.update = function(event){
  if(event.type === 'INPUT'){
    this._model.setText(event.data);
  }
  else if(event.type === 'RESET'){
    this._model.setText('');
  }
};
