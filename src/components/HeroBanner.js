import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/mix.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '100px', xs: '70px'},
      ml: { sm: '50px' }
    }}
    position='relative'
    p='20px'>
      <Typography color='#38b54a'
      fontWeight='600'
      fontSize='26px'>
        Unique and original
      </Typography>
      <Typography fontWeight={700}
      lineHeight='1.2em'
      sx={{
        fontSize: { lg: '44px', xs: '40px'}
      }}
      mb='20px' mt='20px'>
        Plant-Based <br/> Recipes
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Discover Delicious Vegan Eats for Every Meal
      </Typography>
      <Button variant='contained'
      color='success' href='#recipes'>Explore Recipes</Button>
      <Typography fontWeight={600} 
      color='#38b54a'
      sx={{
        opacity: '0.17',
        display: { lg: 'block', xs: 'none' }
      }}
      fontSize='200px'>
        Eat Vegan
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner