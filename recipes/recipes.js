const recipes = [
  {
    name: "Apple Crisp",
    image: "images/apple-crisp.jpg",
    alt: "Image of apple crisp on a plate",
    tags: ["Dessert", "Fruit"],
    ingredients: ["apples", "sugar", "flour", "butter", "oats"],
    rating: 4,
    description:
      "A simple yet delicious fall dessert that's great with vanilla ice cream.",
  },
  {
    name: "Spaghetti Bolognese",
    image: "images/spaghetti.jpg",
    alt: "Plate of spaghetti bolognese",
    tags: ["Dinner", "Pasta"],
    ingredients: [
      "ground beef",
      "tomato",
      "onion",
      "garlic",
      "spaghetti noodles",
    ],
    rating: 5,
    description: "Classic Italian meat sauce served over spaghetti noodles.",
  },
];

function getRandomListEntry(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function tagsTemplate(tags) {
  return tags.map((tag) => `<li>${tag}</li>`).join("");
}

function ratingTemplate(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars +=
      i <= rating
        ? `<span aria-hidden="true" class="icon-star">⭐</span>`
        : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  return `
      <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
        ${stars}
      </span>
    `;
}

function recipeTemplate(recipe) {
  return `
      <figure class="recipe">
        <img src="${recipe.image}" alt="${recipe.alt}" />
        <figcaption>
          <ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
          </ul>
          <h2><a href="#">${recipe.name}</a></h2>
          <p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
          </p>
          <p class="recipe__description">
            ${recipe.description}
          </p>
        </figcaption>
      </figure>
    `;
}

function renderRecipes(recipeList) {
  const outputElement = document.querySelector(".recipe-grid");

  if (recipeList.length === 0) {
    outputElement.innerHTML = `<p class="no-results">No recipes found. Please try another search.</p>`;
    return;
  }

  const htmlList = recipeList.map((recipe) => recipeTemplate(recipe));
  outputElement.innerHTML = htmlList.join("");
}

function filterRecipes(query) {
  const lowerQuery = query.toLowerCase();

  const filtered = recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
    const descMatch = recipe.description.toLowerCase().includes(lowerQuery);
    const tagMatch = recipe.tags.find((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    const ingMatch = recipe.ingredients.find((ing) =>
      ing.toLowerCase().includes(lowerQuery)
    );
    return nameMatch || descMatch || tagMatch || ingMatch;
  });

  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
  return sorted;
}

function searchHandler(e) {
  e.preventDefault();
  const input = document.querySelector("#search");
  const query = input.value.toLowerCase().trim();
  const filteredList = filterRecipes(query);
  renderRecipes(filteredList);
}

function resetSearch() {
  document.querySelector("#search").value = "";
  renderRecipes(recipes);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

document
  .querySelector(".search-form")
  .addEventListener("submit", searchHandler);
document.querySelector("#resetBtn").addEventListener("click", resetSearch);

init();
