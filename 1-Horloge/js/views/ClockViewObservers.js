function ClockView(model){

    this._model = model;
    Observable.call(this);
    this._elem=[];
    this._event= new EventEmitter();
    this._init("hours","span");
    this._init("minutes","span");
    this._init("secondes","span");

    this._init("h+","button");
    this._init("h-","button");
    this._init("m+","button");
    this._init("m-","button");
    this._init("s+","button");
    this._init("s-","button");
    this._init("time","button");

    this._bindListeners(this);

}

ClockView.prototype = Object.create(Observable.prototype);
ClockView.prototype.constructor = ClockView;

ClockView.prototype._init = function(id,cat){

    var elem =document.createElement(cat);
    elem.setAttribute("id",id);
    elem.innerHTML=id;
    document.body.appendChild(elem);

    if(cat==='button')
    {
        this._elem.push(elem);
    }
};

ClockView.prototype._bindListeners = function(view){

    view._elem.forEach(function(element){
        element.addEventListener('click',function(e){
            view.notify({type: this.innerHTML});
        });
    });
};

ClockView.prototype.display = function(model){

    document.getElementById("secondes").innerHTML =" : "+model.prettyTime(model.s);
    document.getElementById("minutes").innerHTML =" : "+ model.prettyTime(model.m);
    document.getElementById("hours").innerHTML = model.prettyTime(model.h);
};

ClockView.prototype.update = function(event){
    if(event.type === 'NB_CHANGED'){
        this.display(model);
    }
};


