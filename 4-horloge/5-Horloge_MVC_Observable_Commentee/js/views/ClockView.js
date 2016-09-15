function ClockView(model){
  Observable.call(this); // appel du constructeur parent 
  this._model = model; // reference au modele
  this._buttons = []; // les boutons seront dans un tableau
  this._createElements(); //appel de la méthode _createElements() ci dessous
  this._bindListeners();// appel de la méthode _bindListeners() ci dessous
}

ClockView.prototype = Object.create(Observable.prototype); // ClockView extends Observable
ClockView.prototype.constructor = ClockView; // Constructeur

ClockView.prototype._bindListeners = function(){
  this._buttons.forEach(function(btn){ // pour chaque bouton
    // sur un "event" click cf http://www.w3schools.com/jquery/event_click.asp
    btn.on('click', function(e){ 

      this.notify({type: btn.html()}); // ici appel de la methode NOTIFY de la class Observable
    }.bind(this));
  }, this);
};

ClockView.prototype._createElements = function(){ //Fonction de création des éléments composant le rendu 
  var body = $(document.body);
  this._hoursElement = $('<span>00</span>');
  // Append sert à ajouter du contenu à la suite d'un element html, ici body
  // http://www.w3schools.com/jquery/html_append.asp
  body.append(this._hoursElement).append(':');
  this._minutesElement = $('<span>00</span>');
  body.append(this._minutesElement).append(':');
  this._secondsElement = $('<span>00</span>');
  body.append(this._secondsElement);
  body.append('<hr>');
  var labels = ['h+', 'h-', 'm+', 'm-', 's+', 's-']; // on déclare des labels dans un tableau
  this._buttons = labels.map(function(label){ // on boucle dessus et ils deviendront des boutons 
    return $('<button>' + label + '</button>');
  });
  body.append(this._buttons);//on pousse les boutons dans le html avec append().
};

ClockView.prototype.display = function(){ // là on balance l'affichage apres avoir recuperer ce qu'il faut du modele
// HTML ci dessous renvoie le innerHtml http://www.w3schools.com/jquery/html_html.asp
  this._hoursElement.html(this._pretty(this._model.getHours()));
  this._minutesElement.html(this._pretty(this._model.getMinutes()));
  this._secondsElement.html(this._pretty(this._model.getSeconds()));
};

//methode qui gere les zeros à l'affichage
ClockView.prototype._pretty = function(nb){ 
  return nb < 10 ? '0' + nb : nb;
};

ClockView.prototype.update = function(event){
  // si on a un evenenement qui confirme et donc respecte la condition 'TIME_CHANGED' on applle la methode display();
  if(event.type === 'TIME_CHANGED'){ 
    this.display();
  }
};
