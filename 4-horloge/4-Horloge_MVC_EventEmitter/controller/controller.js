function Controller(view, model){
  this._view = view;
  this._model = model;
  this._bindActions();
}

// What to do when the view triggers an event?
Controller.prototype._bindActions = function(){
  this._view.on('hPlus', this._addHourAction.bind(this));
  this._view.on('mPlus', this._addMinuteAction.bind(this));
  this._view.on('sPlus', this._addSecondAction.bind(this));
  this._view.on('hMinus', this._removeHourAction.bind(this));
  this._view.on('mMinus', this._removeMinuteAction.bind(this));
  this._view.on('sMinus', this._removeSecondAction.bind(this));
};

// Equivalent to our habitual actions
// We call the right method of model 
Controller.prototype._addHourAction = function(){
  this._model.addHour();
};
Controller.prototype._addMinuteAction = function(){
  this._model.addMinute();
};
Controller.prototype._addSecondAction = function(){
  this._model.addSecond();
};
Controller.prototype._removeHourAction = function(){
  this._model.removeHour();
};
Controller.prototype._removeMinuteAction = function(){
  this._model.removeMinute();
};
Controller.prototype._removeSecondAction = function(){
  this._model.removeSecond();
};
