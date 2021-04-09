//Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques.

//- Usar .forEach() per obtenir aquest array.

//- Usar .map() per obtenir aquest array.

var tasks = [
  {
    name: "Start React web",
    duration: 120,
  },
  {
    name: "Work out",
    duration: 60,
  },
  {
    name: "Procrastinate on facebook",
    duration: 240,
  },
];

//.forEach()

tasks.forEach((element) => console.log(element.name));
//Map

tasks.map((element) => console.log(element.name));
