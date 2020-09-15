//---------------------
//ANCHOR Classe Cercle
//---------------------

function Cercle(X, Y, rayon, color) {
	this.X=X
    this.Y=Y
    this.rayon=rayon;
    this.color = color;
}

//-----------------------------------------
//ANCHOR Fonction Principale
//-----------------------------------------

var canvas = document.getElementById('zone');
var ctx = canvas.getContext('2d');

//Effacer la sauvegarde
// localStorage.removeItem('save');

//On récupère les cercles sauvegardés
var save = JSON.parse(localStorage.getItem('save'));
if(save == null)
    save=[];
console.log('sauvegarde récupérée :', save);

canvas.addEventListener("click", function(e)
{
    //1 - Récupérer les coordonnées du pointeur
    var X = e.pageX;
    var Y = e.pageY;

    //2 - Récupérer un rayon aléatoire
    var rayon = getRandomInt(150);

    //3 - Récupérer une couleur aléatoire
    var color = getRandomColor();

    //4 - Créer le cercle
    ctx.beginPath();
    ctx.arc(X, Y, rayon, 0, 2*Math.PI, true);
    ctx.strokeStyle = color;
    ctx.stroke();

    //5 - Sauvegarder le cercle
    save.push(new Cercle(X, Y, rayon, color));
    localStorage.setItem('save', JSON.stringify(save));
});

//--------------------------
//ANCHOR Fonctions annexes
//--------------------------

//Entier Aléatoire
function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

//Couleur Héxa-décimale aléatoire
function getRandomColor()
{
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
