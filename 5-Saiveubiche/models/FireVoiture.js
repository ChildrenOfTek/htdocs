// Feu.js
function FireVoiture()
{
    this.topColor='';
    this.midColor='';
    this.botColor='';

    this.init();

}
FireVoiture.prototype.init = function()
{
    this.setTopColor('white');
    this.setMidColor('white');
    this.setBotColor('green');

};

FireVoiture.prototype.setTopColor = function(color)
{
    this.topColor = color;
};
FireVoiture.prototype.getTopColor = function()
{
    return this.topColor;
};
FireVoiture.prototype.setMidColor = function(color)
{
    this.midColor = color;
};
FireVoiture.prototype.getMidColor = function()
{
    return this.midColor;
};
FireVoiture.prototype.setBotColor = function(color)
{
    this.botColor = color;
};
FireVoiture.prototype.getBotColor = function()
{
    return this.botColor;
};