/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"
function getSchool() {
  return "Novi Hogeschool";
}

console.log(getSchool());


/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"
const name = "Jenni";

function complimentGiver(name) {
  return "Grondig bezig " + name + "!";
}

console.log(complimentGiver(name));

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]
let grades = [8, 8.5, 6, 7]

function getGrades(grades) {
  return grades;
}

console.log(getGrades(grades));
/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }
let details = ["Jennifer", "Demeijer-van Driel"]
const detailsSentence = "firstName: " + details[0] + ", lastName: " + details[1]
function getDetails() {
  return detailsSentence;
}

console.log(getDetails(details));