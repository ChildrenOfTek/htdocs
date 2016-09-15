// Feu.js
function Fire()
{
    this.topColor='white';
    this.midColor='white';
    this.botColor='green';
    this.class=type;
    this.init();

}
Fire.prototype.init = function()
{
    $(this).css('background-color','white');
};

Fire.prototype.noblink = function(color)
{
    //color red no blink
};
Fire.prototype.blink = function(color)
{
    //color red blink time 6 sec interval 1sec
};
Fire.prototype.setColor = function(color)
{
    this.color = color;
};
Fire.prototype.getColor = function()
{
    return this.color;
};