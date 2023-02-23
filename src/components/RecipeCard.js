import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {
  return (
    <Link className='recipe-card' to={`/recipe/${recipe.id}`}>
      <img src={recipe.image} alt={recipe.title} loading='lazy' />
      <Stack direction='row'>
        {recipe.glutenFree && <Button sx={{ ml: '21px', color: '#fff', background: 'red',
          fontSize: '14px', borderRadius: '20px', textTransform:
          'capitalize'}}
        >
          Gluten-free
        </Button>}
        {recipe.cuisines[0] && <Button sx={{ ml: '21px', color: '#fff', background: 'green',
          fontSize: '14px', borderRadius: '20px', textTransform:
          'capitalize'}}
        >
          {recipe.cuisines[0]}
        </Button>}
      </Stack>
      <Typography ml='21px' color='#000' fontWeight='bold' 
       mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
        {recipe.title}
      </Typography>
    </Link>
  )
}

export default RecipeCard