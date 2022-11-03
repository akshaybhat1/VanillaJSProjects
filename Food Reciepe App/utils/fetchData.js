import get from "./getElement.js";
const containerDOM = get(".section-container");

const fetchRecipe = async (url) => {
  containerDOM.innerHTML = `<h4 class="loading">Loading....</h4>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.meals === null) {
      containerDOM.innerHTML = `<h4 class="error">Sorry! We din't find any meal. Try again later!</h4>`;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchRecipe;
