import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchRecipes from '../components/SearchRecipes';
import Recipes from '../components/Recipes';
import Loading from '../components/Loading';

const Home = () => {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes setIsLoading={setIsLoading} isLoading={isLoading} setRecipes={setRecipes} />
      {isLoading ? <Loading /> : <Recipes recipes={recipes} /> }
    </Box>
  )
}

export default Home