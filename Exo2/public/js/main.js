// - Créer dans une balise h1 sur votre page JS.
let newBalise = document.createElement('h1');
// Stocker dans dans une variable le contenu "Run Forest !" 
let contenu = document.createTextNode('Run Forest !');
// - Trouver le moyen d'insérer votre contenu ("Run Forest !") dans vos balises
newBalise.appendChild(contenu);
// Insérer votre balise ( avec son contenu) dans votre Html et montrer moi ça dans votre console.
document.body.appendChild(newBalise);

console.log(newBalise);

