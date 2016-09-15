// FireView.js
function FireView(modelVoiture,modelPieton)
{
    EventEmitter.call(this);
    this.modelVoiture=modelVoiture;
    this.modelPieton=modelPieton;
    this.top='';
    this.mid='';
    this.bot='';
    this.pieton='';
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
    this.pieton=document.getElementById('pieton');

    this.bindListeners();
};
FireView.prototype.refreshFire = function()
{
    this.top=$('#top');
    this.mid=$('#mid');
    this.bot=$('#bot');

    this.top.removeClass().addClass('top '+this.modelVoiture.getTopColor());
    this.mid.removeClass().addClass('mid '+this.modelVoiture.getMidColor());
    this.bot.removeClass().addClass('bot '+this.modelVoiture.getBotColor());
};
FireView.prototype.refreshPieton = function()
{
    this.pieton=$('.piet');

    this.pieton.removeClass().addClass('piet '+this.modelPieton.getColor());
};

FireView.prototype.createFire = function()
{
    var div = $('<div>');
    div.attr({ 'class':'fire car' });
    var fireTop = $('<div>').addClass("top "+ this.modelVoiture.getTopColor()).attr({'id':'top'} );
    var fireMid = $('<div>').addClass("mid "+ this.modelVoiture.getMidColor()).attr({'id':'mid'} );
    var fireBot = $('<div>').addClass("bot "+ this.modelVoiture.getBotColor()).attr({'id':'bot'} );

    div.append(fireTop);
    div.append(fireMid);
    div.append(fireBot);
    $("body").append(div);

};

FireView.prototype.createPieton = function()
{
    var div = $('<div>');
    div.addClass('fire pieton');

    var pieton = $('<div>').addClass('piet '+this.modelPieton.getColor()).attr({'id':'pieton'});

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

    // version JQUERY this.top.on('click',this.emit.bind(this,this.top[0].id));
};