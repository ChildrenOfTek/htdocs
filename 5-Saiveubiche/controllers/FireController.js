// FireControllers.js
function FireController(modelVoiture,modelPieton,view)
{
    this.modelVoiture= modelVoiture;
    this.modelPieton= modelPieton;
    this.view = view;
    this.bindActions();
}

FireController.prototype.bindActions = function()
{
    this.view.on("top",function(){console.log('ok')} );
    this.view.on("mid",function(){console.log('ok mid')} );
    this.view.on("bot",function(){console.log('ok bot')} );
    this.view.on("button",this.pieton.bind(this,this));
    this.view.on("button",this.blink.bind(this,this,'red'));
};

FireController.prototype.pieton = function(ctrl)
{
   // console.log(ctrl);
    setTimeout(function()
    {
        ctrl.modelVoiture.setMidColor('orange');
        ctrl.modelVoiture.setBotColor('white');
        ctrl.view.refreshFire();
    }
    ,3000);
    setTimeout(function()
        {
            ctrl.modelVoiture.setTopColor('red');
            ctrl.modelVoiture.setMidColor('white');
            ctrl.view.refreshFire();
            ctrl.modelPieton.setColor('white');
            ctrl.blink(ctrl,'orange');
            ctrl.view.refreshPieton();
        }
        ,6000);
    setTimeout(function()
        {
            ctrl.voiture();
        }
        ,22000);

};
FireController.prototype.blink = function(ctrl,color)
{
        var int=setInterval(function()
        {
            //console.log(ctrl.model);
            if(ctrl.modelPieton.getColor() === color)
            {
                ctrl.modelPieton.setColor('white');

            }else{

                ctrl.modelPieton.setColor(color);

            }
            ctrl.view.refreshPieton();

        },1000);
    setTimeout(function(){
       clearInterval(int);
    },6000);

};
FireController.prototype.voiture = function()
{

};
FireController.prototype.checkLight = function()
{
    //if red active, then switchtoorange, then switchtogreen
    //qqchose avec foreach div dedans firediv is active
};

