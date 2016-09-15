function ClockView(model){

    this._model = model;
    //Observable.call(this);
    this._elem=[];
    this._event= new EventEmitter();
    this._init("hours","span");
    this._init("minutes","span");
    this._init("secondes","span");

    this._init("hplus","button");
    this._init("hmoins","button");
    this._init("mplus","button");
    this._init("mmoins","button");
    this._init("splus","button");
    this._init("smoins","button");
    this._init("time","button");

    this._bindListeners(model,this);

}

// ClockView.prototype = Object.create(Observable.prototype);
// ClockView.prototype.constructor = ClockView;

ClockView.prototype._init = function(id,cat){

    var elem =document.createElement(cat);
    elem.setAttribute("id",id);
    elem.innerHTML=id;
    document.body.appendChild(elem);

    if(cat==='button')
    {
        this._elem.push(elem);
    }
    //console.log(this._event);
};

ClockView.prototype.display = function(model){

    document.getElementById("secondes").innerHTML =" : "+model.prettyTime(model.s);
    document.getElementById("minutes").innerHTML =" : "+ model.prettyTime(model.m);
    document.getElementById("hours").innerHTML = model.prettyTime(model.h);
};

ClockView.prototype._bindListeners = function(model,view){

    /*var hplus=document.getElementById("hplus");

    hplus.addEventListener('click',view._event.emit('hplus'));
    view._event.on('hplus',addHour);

    //view._event.emit('click',addHour);
    console.log(view._event);
    console.log(hplus);*/

    this._elem.forEach( function(btn)
    {

        btn.addEventListener('click',function(e){

            view._event.emit(btn.innerHTML);
            //console.log(this._event);
        });

    });
    document.getElementById("hours").on('change',this.display);

};
/* Avec Observers
ClockView.prototype._bindListeners = function(view){

    view._elem.forEach(function(element){
        element.addEventListener('click',function(e){
            view.notify({type: this.innerHTML});
        });
    });
};

ClockView.prototype.update = function(event){
    if(event.type === 'NB_CHANGED'){
        this.display(model);
    }
};*/


