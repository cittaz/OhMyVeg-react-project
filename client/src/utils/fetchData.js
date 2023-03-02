export const recipesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_SPOONACULAR_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
}

export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}