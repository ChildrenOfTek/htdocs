function View(model){
  EventEmitter.call(this);
  this._model = model;
  // All the DOM elements to get
  this._elements = ['hour', 'minute', 'second'];
  this._clickElements = ['hPlus', 'mPlus', 'sPlus', 'hMinus', 'mMinus', 'sMinus'];
  this._getElements();
  this._init();
  this._bindActions();
}

View.prototype = Object.create(EventEmitter.prototype);
View.prototype.constructor = View;

View.prototype._init = function(){
  this._redraw();
};

// Get all the DOM elements and bind emit
// Basically, it transforms DOM event into View event
View.prototype._getElements = function(){
  this._elements.forEach(function(el){ // ['hour', ... ]
    this['_' + el] = document.getElementById(el); // ex: this._hour = document.getElementById('hour');
  }, this);
  this._clickElements.forEach(function(el){ // ['hPlus', ...]
    this['_' + el] = document.getElementById(el); // ex: this._hPlus = document.getElementById('hPlus');
    this['_' + el].addEventListener('click', this.emit.bind(this, el)); // ex: this._hPlus.addEventListener('click', this.emit.bind(this, 'hPlus'));
  }, this);
};

// What must I do when model changes?
View.prototype._bindActions = function(){
  this._model.on('sChange', this._drawSecond.bind(this));
  this._model.on('mChange', this._drawMinute.bind(this));
  this._model.on('hChange', this._drawHour.bind(this));
};

// Redraw the clock
View.prototype._redraw = function(){
  this._drawHour();
  this._drawMinute();
  this._drawSecond();
};

// Set hour to model value
View.prototype._drawHour = function(){
  var hour = this._model.getHour();
  this._hour.innerHTML = this._prettyTime(hour);
};

// Set minute to model value
View.prototype._drawMinute = function(){
  var minute = this._model.getMinute();
  this._minute.innerHTML =  this._prettyTime(minute);
};

// Set second to model value
View.prototype._drawSecond = function(){
  var second = this._model.getSecond();
  this._second.innerHTML = this._prettyTime(second);
};

// Format the display
View.prototype._prettyTime = function(nb){
  return nb < 10 ? '0' + nb : nb;
}
