import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchRecipes from '../components/SearchRecipes';
import Recipes from '../components/Recipes';

const Home = () => {

  const [recipes, setRecipes] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes setRecipes={setRecipes} />
      <Recipes recipes={recipes} />
    </Box>
  )
}

export default Home