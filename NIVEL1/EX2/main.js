//Arregla l'error del següent bloc de codi:

var users = [
  { firstName: "Homer", lastName: "Simpson" },
  { firstName: "Marge", lastName: "Simpson" },
  { firstName: "Bart", lastName: "Simpson" },
  { firstName: "Lisa", lastName: "Simpson" },
  { firstName: "Maggie", lastName: "Simpson" },
];

const fullName = users.map((element) => {
  return `${element.firstName} ${element.lastName}`;
});
console.log(fullName);
