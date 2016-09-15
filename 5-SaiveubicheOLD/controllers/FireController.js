// FireControllers.js
function FireController(model,view)
{
    this.model= model;
    this.view = view;
    this.bindActions();
}

FireController.prototype.bindActions = function()
{
    this.view.on("top",function(){console.log('ok')} );
    this.view.on("mid",function(){console.log('ok mid')} );
    this.view.on("bot",function(){console.log('ok bot')} );
    this.view.on("button",this.launch);
};

FireController.prototype.launch = function()
{
   
};
FireController.prototype.checkLight = function()
{
    //if red active, then switchtoorange, then switchtogreen
    //qqchose avec foreach div dedans firediv is active
};

