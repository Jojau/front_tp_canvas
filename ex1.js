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
//SECTION Fonction Principale
//-----------------------------------------

var canvas = document.getElementById('zone');
var ctx = canvas.getContext('2d');

//ANCHOR Récupérer & tracer les cercles sauvegardés
var save = JSON.parse(localStorage.getItem('save'));
if(save == null)
    save=[];

for(i=0;i<save.length;i++)
{
    ctx.beginPath();
    ctx.arc(save[i].X, save[i].Y, save[i].rayon, 0, 2*Math.PI, true);
    ctx.strokeStyle = save[i].color;
    ctx.stroke();
}

//ANCHOR Dessiner les cercles au clic
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

//ANCHOR Effacer le dessin
bouton_del_draw=document.getElementById('delete_draw');
bouton_del_draw.addEventListener("click", function()
{
    ctx.clearRect(0, 0, 600, 600);
});

//ANCHOR Effacer la sauvegarde
bouton_del_save=document.getElementById('delete_save');
bouton_del_save.addEventListener("click", function()
{
    localStorage.removeItem('save');
});

//!SECTION

//--------------------------
//SECTION Fonctions annexes
//--------------------------

//ANCHOR Entier Aléatoire
function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

//ANCHOR Couleur Héxa-décimale aléatoire
function getRandomColor()
{
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

//!SECTION