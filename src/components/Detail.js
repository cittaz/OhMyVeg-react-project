import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import VeganIcon from '../assets/icons/vegan.png'
import clockIcon from '../assets/icons/clock.png'
import DairyFreeIcon from '../assets/icons/dairy-free.png'
import GlutenFreeIcon from '../assets/icons/gluten-free.png'


const Detail = ({ recipeDetail }) => {
  const { vegan, glutenFree, dairyFree, readyInMinutes, extendedIngredients, title, image, summary, analyzedInstructions } = recipeDetail;

  //Cut links from summary
  let summaryHTML;
  if (summary) {
    let firstPosition = summary.indexOf('%');
    let finalPosition = summary.indexOf('%', firstPosition+1);
    summaryHTML = finalPosition == -1 ? `${summary.slice(0, firstPosition+1)}.` : `${summary.slice(0, finalPosition+1)}.`;
  }

  let newIngredients;
  if (extendedIngredients) {
    newIngredients = extendedIngredients.map(elem => (
      <Typography key={elem.id} variant='h6' fontSize='18px'>
        {`• ${elem.amount} ${elem.unit && elem.unit + ' of'} ${elem.name} `}
      </Typography>
    ))
  }

  return (
    <Stack p='20px'>
      <Stack gap='60px' sx={{
        flexDirection: { lg: 'row' },
        alignItems: 'center'
      }}>
        <Stack position='relative' gap='14px'>
          <img src={image} alt={title} className='detail-image' loading='lazy' />
          <Stack position='absolute' top='10px' right='10px' direction='row' alignItems='center' gap='20px'>
            {vegan && <img className='icons' src={VeganIcon} />}
            {dairyFree && <img className='icons' src={DairyFreeIcon} />}
            {glutenFree && <img className='icons' src={GlutenFreeIcon} />}
          </Stack>
        </Stack>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography variant='h3' fontWeight={600}>
            {title}
          </Typography>
          {summaryHTML && <Typography dangerouslySetInnerHTML={{__html: summaryHTML}}
          variant='h6'>
          </Typography>}

        </Stack>
      </Stack>
      <Typography variant='h4' fontWeight={600}>Ingredients</Typography>
      {newIngredients}
    </Stack>
  )
}

export default Detail

//1.52