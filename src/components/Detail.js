import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import VeganIcon from '../assets/icons/vegan.png'
import clockIcon from '../assets/icons/clock.png'
import DairyFreeIcon from '../assets/icons/dairy-free.png'
import GlutenFreeIcon from '../assets/icons/gluten-free.png'


const Detail = ({ recipeDetail }) => {
  const { vegan, glutenFree, dairyFree, readyInMinutes, extendedIngredients, title, image, summary, analyzedInstructions } = recipeDetail;

  return (
    <Stack gap='60px' sx={{
      flexDirection: { lg: 'row' },
      p: '20px',
      alignItems: 'center'
    }}>
      <img src={image} alt={title} className='detail-image' loading='lazy' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography>
          {title}
        </Typography>
        <Typography>
          {summary}
        </Typography>

      </Stack>
    </Stack>
  )
}

export default Detail

//1.52