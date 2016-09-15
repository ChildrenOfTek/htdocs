//models/Model.js

function Model(){
  Observable.call(this);
  this._text = "";
}

Model.prototype = Object.create(Observable.prototype);
Model.prototype.constructor = Model;

Model.prototype.getText = function(){
  return this._text;
};

Model.prototype.setText = function(txt){
  this._text = txt;
  this.notify({type: "TXT_CHANGED"});
  return this;
};
