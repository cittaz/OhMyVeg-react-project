import React from 'react';
import { Stack, Typography } from '@mui/material';

const RandomRecipe = ({ image }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='randomRecipe-card'
      sx={{
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      <img src={image} alt='recipe image' style={{ width: '300px' }} />
    </Stack>
  )
}

export default RandomRecipe