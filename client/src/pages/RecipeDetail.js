import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { recipesOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import { fetchImage } from '../utils/fetchImage';
import { ImprovedImageContext } from '../utils/Contexts';
import Loading from '../components/Loading';

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { improveImages } = useContext(ImprovedImageContext);

  useEffect(() => {
    const fetchRecipesData = async () => {
      const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';
      try {
        setIsLoading(true)
        const recipeDetailData = await fetchData(`${recipeUrl}/${id}/information`, recipesOptions);
        if (improveImages) {
          const recipeImage = await fetchImage(recipeDetailData.title);
          setRecipeDetail({...recipeDetailData, image: recipeImage.image});
        } else {
          setRecipeDetail({...recipeDetailData});
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipesData();
  }, [id])
  

  return (
    <Box>
      { isLoading ? <Loading /> : <Detail recipeDetail={recipeDetail} /> }
    </Box>
  )
}

export default RecipeDetail