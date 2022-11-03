import get from "./getElement.js";
import fetchRecipe from "./fetchData.js";

const searchBox = get(".search-box");
const form = get("form");
const containerDOM = get(".section-container");

const displayItem = (data) => {
  const recipe = data.meals;
  const mealsList = recipe
    .map((item) => {
      return `<div class="item">
          <img
            src="${item.strMealThumb}"
            alt=""
            class="recipe"
          />
          <h3 class="recipe-name">${item.strMeal}</h3>
          <button class="get-item">get recipe</button>
        </div>`;
    })
    .join("");
  containerDOM.innerHTML = mealsList;
};

const start = () => {
  const source = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = `${source}${searchBox.value}`;
    const data = await fetchRecipe(url);
    displayItem(data);
  });
};

start();
