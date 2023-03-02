import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';

import RandomRecipe from './RandomRecipe';

const HorizontalScrollBar = ({ data }) => {
  
  if (data) {
    return (
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} 
          flexWrap="wrap" 
          justifyContent="center">
          {data.map((item) => (
          <Link key={item.id} to={`/recipe/${item.id}`}>
            <Box
              itemID={item.id}
              title={item.title}
              m='0 40px'
            >
              <RandomRecipe image={item.image}  />
            </Box>
          </Link>
        )
        )}
      </Stack>
    )
  }
}

export default HorizontalScrollBar