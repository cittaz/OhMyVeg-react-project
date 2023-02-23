import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';

import { recipesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchRecipes = ({ setRecipes }) => {

  const [search, setSearch] = useState('')
  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    const fetchRandomData = async () => {
      let randomNumber = Math.floor(Math.random() * 10000);
      const fetchRandomRecipe = await fetchData(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?diet=vegan&addRecipeInformation=false&offset=${randomNumber}&number=8`, recipesOptions);
      setRandomRecipe([fetchRandomRecipe]);
    };
    fetchRandomData();
  }, [])
  

  async function handleSearch() {
    if(search) {
      const recipesData = await fetchData(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${search}&diet=vegan&type=maincourse&addRecipeInformation=false&sort=popularity&offset=0&number=18`, recipesOptions);
      console.log(recipesData);

      setSearch('');
      setRecipes([recipesData]);
    }
  }


  return (
    <Stack alignItems='center' mt='37px'
    justifyContent='center' p='20px'>
      <Typography 
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }}
      mb='50px' textAlign='center'>
        Awesome Recipes You <br/> Should Try
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs:'350px' },
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
          heigth='76px'
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}  
          placeholder='Search Recipes'
          type='text'
        />
        <Button className='search-btn'
        sx={{
          bgcolor: '#38b54a',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={randomRecipe} />
      </Box>
    </Stack>
  )
}

export default SearchRecipes