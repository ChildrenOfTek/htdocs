// Feu.js
function FirePieton()
{
     this.color='';

    this.init();

}
FirePieton.prototype.init = function()
{
    this.setColor('red');
};
FirePieton.prototype.setColor = function(color)
{
    this.Color = color;
};
FirePieton.prototype.getColor = function()
{
    return this.Color;
};