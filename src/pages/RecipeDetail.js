import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { recipesOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarRecipes from '../components/SimilarRecipes';

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipesData = async () => {
      const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';

      const recipeDetailData = await fetchData(`${recipeUrl}/${id}/information`, recipesOptions);
      setRecipeDetail(recipeDetailData);
    };
    fetchRecipesData();
  }, [id])
  

  return (
    <Box>
      <Detail recipeDetail={recipeDetail} />
      <SimilarRecipes />
    </Box>
  )
}

export default RecipeDetail