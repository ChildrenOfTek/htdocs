function ClockController(model, view){
    this._model=model;
    this._view=view;
    this._event=new EventEmitter();

    this._event.on('hplus',model.setHours(model.h+1));
    this._event.on('mplus',model.setMinutes(model.m+1));
}


/* Avec observers
ClockController.prototype.update = function(event){

    switch (event.type)
    {
        case "h+":
            this._model.setHours(this._model.h+1);
        break;

        case "h-":
            this._model.setHours(this._model.h-1);
            break;

        case "m+":
            this._model.setMinutes(this._model.m+1);
            break;

        case "m-":
            this._model.setMinutes(this._model.m-1);
            break;

        case "s+":
            this._model.setSeconds(this._model.s+1);
            break;

        case "s-":
            this._model.setSeconds(this._model.s-1);
            break;

        case "time":
            this._model.setTime();
            break;
    }

};*/


