import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchRecipes from '../components/SearchRecipes';
import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchRecipes />
      <Recipes />
    </Box>
  )
}

export default Home