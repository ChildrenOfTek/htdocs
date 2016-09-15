// cpt.js
function Compteur(model){
    this._model = model;
    this._cpt=0;
    this._init();
}
Compteur.prototype._init = function(){
    this.cptElement= document.createElement('div');
    document.body.appendChild(this.cptElement);
};

Compteur.prototype.update = function(event){
    if(event.type === 'TXT_CHANGED'){
        this._cpt++;
        this.cptElement.innerHTML = this._cpt;
    }
    else if(event.type === 'RESET'){
        this._cpt = 0;
        this.cptElement.innerHTML = this._cpt;
    }

};