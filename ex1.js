var canvas = document.getElementById('zone');
var ctx = canvas.getContext('2d');

//-----------------------------------------
//ANCHOR Clic dans l'espace créé un cercle
//-----------------------------------------

canvas.addEventListener("click", function(e)
{
    //1 - Récupérer les coordonnées du pointeur
    var X = e.pageX;
    var Y = e.pageY;
    console.log('X : ', X, 'Y : ', Y);

    //2 - Récupérer un rayon aléatoire
    var rayon = getRandomInt(150);
    console.log('rayon : ', rayon);

    //3 - Récupérer une couleur aléatoire
    var color = getRandomColor();
    console.log('color : ', color);

    //4 - Créer le cercle
    ctx.beginPath();
    ctx.arc(X, Y, rayon, 0, 2*Math.PI, true);
    ctx.strokeStyle = color;
    ctx.stroke();
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
