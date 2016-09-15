function ClockController(model, view){ //initialisations de notre controleur
  this._model = model;
  this._view =  view;
   this._model.tic();
}

ClockController.prototype.update = function(event){ //methode update 

  //suivant l'évenement observé, on change l'élement concerné 
  switch(event.type){
    case 'h+':
      this._model.setHours(this._model.getHours()+1);
      break;
    case 'h-':
      this._model.setHours(this._model.getHours()-1);
      break;
    case 'm+':
      this._model.setMinutes(this._model.getMinutes()+1);
      break;
    case 'm-':
      this._model.setMinutes(this._model.getMinutes()-1);
      break;
    case 's+':
      this._model.setSeconds(this._model.getSeconds()+1);
      break;
    case 's-':
      this._model.setSeconds(this._model.getSeconds()-1);
      break;
   case 'start':
      this._model.tic();
      break;
    case 'stop':
      this._model.stop();
      break;
    case 'time':
      this._model.time();
      break;
  }
};
