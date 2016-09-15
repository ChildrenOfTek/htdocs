function Clock(){
    Observable.call(this);
    this.h = 0;
    this.m = 0;
    this.s = 0;
}

Clock.prototype = Object.create(Observable.prototype);
Clock.prototype.constructor = Clock;

Clock.prototype.setSeconds = function(sec){
    this.s = sec;
    if(this.s > 59){
        this.s = 0;
        this.setMinutes(this.m+1);
    }
    if(this.s < 0){
        this.s = 59;
        this.setMinutes(this.m-1);
    }
    this.notify({type: "NB_CHANGED"});
};

Clock.prototype.setMinutes = function(min){
    this.m = min;
    if(this.m > 59){
        this.m = 0;
        this.setHours(this.h+1);
    }
    if(this.m < 0){
        this.m = 59;
        this.setHours(this.h-1);
    }
    this.notify({type: "NB_CHANGED"});
};

Clock.prototype.setHours = function(hr){
    this.h = hr;
    if(this.h > 23){
        this.h = 0;
    }
    if(this.h < 0){
        this.h = 23;
    }
    this.notify({type: "NB_CHANGED"});
};

Clock.prototype.setTime = function()
{
    var d = new Date();
    this.setHours(d.getHours());
    this.setMinutes(d.getMinutes());
    this.setSeconds(d.getSeconds());
};

Clock.prototype.prettyTime = function(nb){
    return nb < 10 ? '0' + nb : nb;
};





