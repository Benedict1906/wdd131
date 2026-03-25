// Array of character objects
const characters = [
  {
    name: "Dean",
    fact: "Dean represents loyalty and sacrifice.",
  },
  {
    name: "Sam",
    fact: "Sam represents intelligence and inner conflict.",
  },
  {
    name: "Castiel",
    fact: "Castiel represents free will and humanity.",
  },
  {
    name: "Crowley",
    fact: "Crowley represents moral ambiguity and survival.",
  },
];

// Function to show character fact
function showFact(characterName) {
  const output = document.getElementById("fact");

  // Loop through array (array + object usage)
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name === characterName) {
      // Conditional + DOM interaction
      output.textContent = characters[i].fact;
    }
  }
}
