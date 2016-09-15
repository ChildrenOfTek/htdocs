// FireView.js
function FireView(model)
{
    EventEmitter.call(this);
    this.model=model;
    this.top='';
    this.mid='';
    this.bot='';
    this.button='';
    this.init();

}

FireView.prototype = Object.create(EventEmitter.prototype);
FireView.prototype.constructor = FireView;

FireView.prototype.init = function()
{
    this.createButton('Appuyer pour demander le passage');
    this.createFire();
    this.createPieton();

    this.top=document.getElementById('top');
    this.mid=document.getElementById('mid');
    this.bot=document.getElementById('bot');
    this.button=document.getElementById('button');

    this.bindListeners();
    //console.log(this.top);


};

FireView.prototype.createFire = function()
{
    var div = $('<div>');
    div.attr({ 'class':'fire car' });
    var fireTop
    //var fireTop = $('<div>').addClass('top white').attr({'id':'top'} );
    var fireMid = $('<div>').addClass('mid white').attr({'id':'mid'} );
    var fireBot = $('<div>').addClass('bot green').attr({'id':'bot'} );

    div.append(fireTop);
    div.append(fireMid);
    div.append(fireBot);
    $("body").append(div);

};

FireView.prototype.createPieton = function()
{
    var div = $('<div>');
    div.addClass('fire pieton');

    var pieton = $('<div>').addClass('white piet');


    div.append(pieton);
    $("body").append(div);

};

FireView.prototype.createButton = function(text)
{
    var button=$('<button>');
    button.addClass('button').attr('id','button');
    button[0].innerHTML = text;

    $('body').append(button);
};
FireView.prototype.bindListeners = function()
{
    //console.log($('.button')[0]);
    this.top.addEventListener('click',this.emit.bind(this,this.top.id));
    this.mid.addEventListener('click',this.emit.bind(this,this.mid.id));
    this.bot.addEventListener('click',this.emit.bind(this,this.bot.id));
    this.button.addEventListener('click',this.emit.bind(this,this.button.id));
    //$('.button').on('click', (console.log(this)));
    //     function () {
    //     this.emit.bind(this,$(this)[0].className);
    // } );
        //this.emit.bind(this,$(this)[0].className));

        //console.log($(this)[0] .className);

        //this.emit.bind(this,$(this)[0].class));

    // version JQUERY this.top.on('click',this.emit.bind(this,this.top[0].id));

};