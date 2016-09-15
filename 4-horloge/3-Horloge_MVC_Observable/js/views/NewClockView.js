function NNewClockView(model){
  ClockView.call(this, model);
}

NewClockView.prototype = Object.create(ClockView.prototype);
NewClockView.prototype.constructor = NewClockView;

NewClockView.prototype._createElements = function(){
  var body = $(document.body);
  this._time = $('<div>00:00:00</div>');
  body.append(this._time);
  body.append('<hr>');
  var labels = ['h+', 'h-', 'm+', 'm-', 's+', 's-']
  this._buttons = labels.map(function(label){
    return $('<button>' + label + '</button>');
  });
  body.append(this._buttons);
};

NewClockView.prototype.display = function(){
  this._time.html(this._model.getHours() + '/' + this._model.getMinutes() + '/' + this._model.getSeconds());
};
