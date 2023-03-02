import React, { useEffect, useState, useContext } from 'react';
import { Box, Stack, Typography, Button, TextField, Switch, useMediaQuery } from '@mui/material';

import { recipesOptions, fetchData } from '../utils/fetchData';
import { fetchImage } from '../utils/fetchImage';
import HorizontalScrollBar from './HorizontalScrollBar';
import { ImprovedImageContext } from '../utils/Contexts';
import Loading from './Loading';

const SearchRecipes = ({ setRecipes, setIsLoading, isLoading }) => {

  const matches = useMediaQuery('(min-width:750px)');
  let improvePositioning = matches ? 'absolute' : 'none';

  const [search, setSearch] = useState('')
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [horizontalLoading, setHorizontalLoading] = useState(false);
  const { improveImages, setImproveImages } = useContext(ImprovedImageContext);

  useEffect(() => {
    const fetchRandomData = async () => {
      let randomNumber = Math.floor(Math.random() * 900);
      const fetchRandomRecipe = await fetchData(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?diet=vegan&addRecipeInformation=false&offset=${randomNumber}&number=3`, recipesOptions);
      try {
        let newRandomData;
        if (improveImages) {
          setHorizontalLoading(true);
          newRandomData = await Promise.all (fetchRandomRecipe.results.map(async (elem) => {
            const newRandomImage = await fetchImage(elem.title);
            return ({...elem, image: newRandomImage.image})
          })) 
        } else {
          newRandomData = fetchRandomRecipe.results.map(elem => ({...elem}));
        }
        setRandomRecipe(newRandomData);
      } finally {
        setHorizontalLoading(false)
      }
    };
    fetchRandomData();
  }, [improveImages])
  

  async function handleSearch() {
    if(search) {
      const recipesData = await fetchData(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${search}&diet=vegan&type=maincourse&addRecipeInformation=true&sort=popularity&offset=0&number=8`, recipesOptions);
      try {
        setIsLoading(true);
        let newRecipesData;
        if (improveImages) { 
          newRecipesData = await Promise.all (recipesData.results.map(async (elem) => {
            const newImage = await fetchImage(elem.title)
            return ({...elem, image: newImage.image})}));
         } else {
            newRecipesData = recipesData.results.map(elem => ({...elem}));
          }
  
          setSearch('');
          setRecipes(newRecipesData);
      } finally {
        setIsLoading(false)
      }
      };  
    }

    const handleKeypress = e => {
      if (e.keyCode === 13) {
        handleSearch();
      }
    };


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
        id='recipes'
        sx={{
          input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs:'350px' },
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
          heigth='76px'
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          onKeyDown={handleKeypress}  
          placeholder='Search Recipes'
          type='text'
        />
        <Button className='search-btn' type='submit'
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
        <Stack direction='row' sx={{
          position: `${improvePositioning}`,
          right: '-186px',
          bottom: '10px'
        }}
          alignItems='center'>
          <Switch
            sx={{
              color: '#fff',
              textTransform: 'none',
              // position: 'absolute',
              // right: '-68px'
            }}
            checked={improveImages}
            onClick={() => {
              setImproveImages(!improveImages)
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Typography fontWeight={600}>Improve images</Typography>
        </Stack>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {horizontalLoading ? <Loading /> : <HorizontalScrollBar data={randomRecipe} />}
      </Box>
    </Stack>
  )
}

export default SearchRecipes