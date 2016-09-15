function Model(){
  EventEmitter.call(this); // Call EventEmitter constructor
  // Model Initialisation
  this._hour = 0;
  this._minute = 0;
  this._second = 0;
}

// EventEmitter inheritance
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = EventEmitter;

// Start the clock
Model.prototype.start = function(){
  setInterval(this._tic.bind(this), 1000);
};

// Tic... adds a second
// Tic... as an event 
Model.prototype._tic = function(){
  this.addSecond();
  this.emit('tic');
};

Model.prototype.getHour = function(){
  return this._hour;
};

Model.prototype.getMinute = function(){
  return this._minute;
};

Model.prototype.getSecond = function(){
  return this._second;
};

// Check if hour is valid
Model.prototype.setHour = function(hour){
  this._hour = hour > 23 ? 0 : (hour < 0 ? 23 : hour);
  this.emit('hChange');
};

// Check if minute is valid
Model.prototype.setMinute = function(minute){
  if(minute > 59){
    minute = 0;
    this.setHour(this._hour + 1);
  }
  else if (minute < 0){
    minute = 59;
    this.setHour(this._hour - 1);
  }
  this._minute = minute;
  this.emit('mChange');
};

// Check if second is valid
Model.prototype.setSecond = function(second){
  if(second > 59){
    second = 0;
    this.setMinute(this._minute + 1);
  }
  else if (second < 0){
    second = 59;
    this.setMinute(this._minute - 1);
  }
  this._second = second;
  this.emit('sChange');
};

// second++
Model.prototype.addSecond = function(){
  this.setSecond(this._second + 1);
};

// minute++
Model.prototype.addMinute = function(){
  this.setMinute(this._minute + 1);
};

// hour++
Model.prototype.addHour = function(){
  this.setHour(this._hour + 1);
};

// second--
Model.prototype.removeSecond = function(){
  this.setSecond(this._second - 1);
};

// minute--
Model.prototype.removeMinute = function(){
  this.setMinute(this._minute - 1);
};

// hour--
Model.prototype.removeHour = function(){
  this.setHour(this._hour - 1);
};
