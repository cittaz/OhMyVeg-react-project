import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import RecipeCard from './RecipeCard';
import { recipesOptions, fetchData } from '../utils/fetchData';

const Recipes = ({ recipes }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes ? recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) : '';

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 1600, behavior: 'smooth' })
  }

  if(recipes.length > 0) {
    return (
      <Box id="recipes" sx={{
        mt: { lg: '20px', xs: '10px'},
        ml: { sm: '50px' }}}
       mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold" 
          sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="26px"
        >
          Showing Results
        </Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} 
          flexWrap="wrap" 
          justifyContent="center">
          {currentRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe}/>
          ))}
        </Stack>
        <Stack mt='160px' alignItems='center'>
            {recipes.length > recipesPerPage && (
              <Pagination color='standard' shape='rounded'
               defaultPage={1} count={Math.ceil(recipes.length / recipesPerPage)}
               page={currentPage} onChange={paginate} size='large'>
            
              </Pagination>
            )}
        </Stack>
      </Box>
    );
  }
};

export default Recipes