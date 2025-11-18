let compteur = 0;

let imgBrush = []
let brushUtilisé = 1;
let matiereBrush = []
let matiereUtilisé = 1;
let tailleBrush = 100;
let changement = false

let imgMasque = []
let imageAffichée = 1;

let reset;

let bordDroit;
let bordGauche;
let bordHaut;
let bordBas;

let messageMax = 'Taille maximale atteinte.';
let messageMin = 'Taille minimale atteinte.';
let message ='';
let messageDebut= 0
let messageDurée = 5000

let télécharger =[]
let largeur = 600
let hauteur = 1250

let modeAléatoire = false
let imgAléatoire = []
let aléatoireAffiché = 1


function preload(){
    for (let i = 1; i < 8; i++){
        imgMasque[i] = loadImage('image/design génératif/Masque/forme globale ('+i+').png')
    }
    for (let a = 1; a < 10; a++){
        imgBrush[a] = loadImage('image/design génératif/brushes/brush ('+a+').png')
    }
     for (let b = 1; b < 10; b++){
        matiereBrush[b] = loadImage('image/design génératif/brushes/matiere ('+b+').png')
  }
    télécharger = loadImage('image/design génératif/télécharger.png')
    
    for(let c = 1; c < 3; c++){
        imgAléatoire[c] = loadImage('image/design génératif/aléatoire ('+c+').png')
    }
}




function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    imageMode(CENTER);

    for (let i = 1; i < 8; i++) {
        if (imgMasque[i]) {
            imgMasque[i].resize(1250, 1250);
         }
    }
//   document.oncontextmenu = () => false;

  brushUtilisé = imgBrush[1]

  bordDroit = windowWidth/2 + 500
  bordGauche = windowWidth/2 - 500
  bordHaut = windowHeight/2 - 500
  bordBas = windowHeight/2 + 500

}




function draw() {
     fill(230);
    stroke(0);
    strokeWeight(2);
    rect(10, 10, largeur, hauteur);

    fill(0);              // texte noir
    noStroke();
    textSize(40);
    textAlign(LEFT, TOP);
    text("MENU :", 20, 20);
    text("Taille du Pinceau", 20, 80)
    textSize(30);
    text("↑ : agrandir brush", 20, 120);
    text("↓ : réduire brush", 20, 160);
    textSize(40)
    text("Changer le Calque", 20, 220)
    textSize(30);
    text("← / → : changer masque", 20, 260);
     textSize(40)
    text("Changer le pinceau", 20, 320)
    textSize(30)
    text("NumPad 1-9 : Choisir un pinceau", 20, 360);
    text("0 : Basculer de type de pinceaux", 20, 400);
    text("Pinceaux actuel :", 20, 480)
    image(brushUtilisé, largeur/2, 650, 300, 300)

    text("Suppr : Réinitialiser", 20, 800)

    if(modeAléatoire == false){
        aléatoireAffiché = imgAléatoire[2]
    }else{aléatoireAffiché = imgAléatoire[1]    
    }
    image(aléatoireAffiché, largeur/2, 1000, 200, 100)

    image(télécharger, largeur/2, 1100, 200, 100)

if(modeAléatoire == true){
    
    tailleBrush= random(10, 310)
      let brushAleatoire = floor(random(1, 9));
      let brush = imgBrush[brushAleatoire];

      let matiereAleatoire = floor(random(1, 9));
      let matiere = matiereBrush[matiereAleatoire];

      let brushX = random(bordGauche, bordDroit);
      let brushY = random(bordHaut, bordBas);

      let angle = random(0, 360);
       
      push();
      translate(brushX, brushY);
      rotate(radians(angle));
      imageMode(CENTER);
      image(brush, 0, 0, tailleBrush, tailleBrush);
      image(matiere, 0, 0, tailleBrush, tailleBrush);
      pop();

}else{
    if(mouseIsPressed && mouseButton === LEFT && brushUtilisé && (mouseX > bordGauche && mouseX < bordDroit) && (mouseY > bordHaut && mouseY < bordBas)){
              image(brushUtilisé, mouseX, mouseY, tailleBrush, tailleBrush)
    }
}

    if (imgMasque[imageAffichée]) { 
        image(imgMasque[imageAffichée],width/2, height/2)
    }

  if (message && millis() - messageDebut < messageDurée) {
    textAlign(CENTER);
    textSize(25);
    fill(255, 0, 0)
    text(message, windowWidth / 2, 100);
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
            imageAffichée++;
            if (imageAffichée > 7){
            imageAffichée = 1;}
            background(255)
    }

    if(keyCode === LEFT_ARROW){
            imageAffichée--;
            if (imageAffichée < 1){
            imageAffichée = 7;
        }
         background(255)
    }

    if(keyCode === UP_ARROW){ 
        if(tailleBrush < 310){
            tailleBrush = tailleBrush +10
        }else{
            tailleBrush = 310
            message = messageMax
            messageDebut = millis()
        }     
      }      

    if(keyCode === DOWN_ARROW ){
        if(tailleBrush > 10){
            tailleBrush = tailleBrush -10
        }else{
            tailleBrush = 10
            message = messageMin
            messageDebut = millis()
        }
    }
    


    if(keyCode === 96){
       changement = !changement
    }
    if(keyCode === 46){
        background(255)
    }
 if(changement == false){
     switch(keyCode){
    case 97: brushUtilisé = imgBrush[1]; break;
    case 98: brushUtilisé = imgBrush[2]; break;
    case 99: brushUtilisé = imgBrush[3]; break;
    case 100: brushUtilisé = imgBrush[4]; break;
    case 101: brushUtilisé = imgBrush[5]; break;
    case 102: brushUtilisé = imgBrush[6]; break;
    case 103: brushUtilisé = imgBrush[7]; break;
    case 104: brushUtilisé = imgBrush[8]; break;
    case 105: brushUtilisé = imgBrush[9]; break;
     }
    }else{
        switch(keyCode){
    case 97: brushUtilisé = matiereBrush[1]; break;
    case 98: brushUtilisé = matiereBrush[2]; break;
    case 99: brushUtilisé = matiereBrush[3]; break;
    case 100: brushUtilisé = matiereBrush[4]; break;
    case 101: brushUtilisé = matiereBrush[5]; break;
    case 102: brushUtilisé = matiereBrush[6]; break;
    case 103: brushUtilisé = matiereBrush[7]; break;
    case 104: brushUtilisé = matiereBrush[8]; break;
    case 105: brushUtilisé = matiereBrush[9]; break;
    }
}
    }

function mouseClicked(){
    //     image(aléatoireAffiché, largeur/2, 1000, 200, 100)
  let aleatoireX = largeur / 2;
  let aleatoireY = 1000;

  let largeurBouton = 200;
  let hauteurBouton = 100;
  let aleatoireGauche = aleatoireX - largeurBouton / 2;
  let aleatoireDroite = aleatoireX + largeurBouton / 2;
  let aleatoireHaut = aleatoireY - hauteurBouton / 2;
  let aleatoireBas = aleatoireY + hauteurBouton / 2;

  if (
    mouseX > aleatoireGauche && mouseX < aleatoireDroite &&
    mouseY > aleatoireHaut && mouseY < aleatoireBas
  ) {
    modeAléatoire = !modeAléatoire;
  }

  let téléchargerX = largeur / 2;
  let téléchargerY = 1100;

  let téléchargerGauche = téléchargerX - largeurBouton / 2;
  let téléchargereDroite = téléchargerX + largeurBouton / 2;
  let téléchargerHaut = téléchargerY - hauteurBouton / 2;
  let téléchargerBas = téléchargerY + hauteurBouton / 2;

  if (
    mouseX > téléchargerGauche  && mouseX <téléchargereDroite &&
    mouseY > téléchargerHaut && mouseY < téléchargerBas
  ) { 
    let dessin = get(bordGauche, bordHaut, bordDroit - bordGauche, bordBas - bordHaut);
    dessin.save('mon_dessin', 'png');
}
}