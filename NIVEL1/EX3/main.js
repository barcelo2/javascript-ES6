//Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

var epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const phrase = epic.reduce((acc, curVal) => {
  return `${acc} ${curVal}`;
});

console.log(phrase);
//Resultat per consola: 'a long time ago in a galaxy far far away'

//Nota: no fa falta fer un "join".
