// app.js
var div=document.getElementById("horloge");
var horloge;
var Event = new EventEmitter();
window.onload=function() { horloge=new Horloge().init()};

var Horloge = function()
{
    this.secondes=0 ;
    this.minutes=0;
    this.heures=0;
    var base = this;

    this.init = function()
    {
        var buttons=[];
        var button=document.getElementsByTagName('button');
        for(var ii=0;ii<button.length;ii++){buttons.push(button[ii])}
        //buttons.push(document.getElementsByTagName('button'));
        console.dir(buttons);
        start(this);
        for(jj=0;jj<buttons.length;jj++){buttons[jj].addEventListener('click',
            setTime)}
        //buttons.forEach(function(element){ Event.on('click',setTime(element))});
    };
    function start(horloge){
        console.dir('horloge '+horloge);
        horloge.secondes++;
        if (horloge.secondes>59){horloge.secondes=0;horloge.minutes++}
        if (horloge.minutes>59){horloge.minutes=0;horloge.heures++}

        document.getElementById('heures').innerText=prettyTime(horloge.heures)+" H";
        document.getElementById('minutes').innerText=prettyTime(horloge.minutes)+" M";
        document.getElementById('secondes').innerText=prettyTime(horloge.secondes)+" S";

        time=setTimeout('start()',1000);
        console.dir('time '+time);

    }
    function prettyTime(nb)
    {
        if(nb<10){
            return "0"+nb;
        }else{
            return nb;
        }
    }


    this.stopChrono = function() {
        clearInterval(this.time);
    };


    function setTime(val)
    {
        var time=val.toElement.value;
        console.log(val.toElement.value);
        switch (time)
        {
            case "H+" :
                this.heures+=1;
                break;

            case "H-" :
                this.heures-=1;
                break;
        }

    }
};


