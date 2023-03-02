import React from 'react';
import { Box, Stack, Typography, Divider } from '@mui/material';

const Footer = () => {
  return (
      <Stack  
          mt='60px'  
          p='24px'       
          divider={<Divider orientation="horizontal" flexItem />}
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={2}
          sx={{borderTop: '3px solid #39B54A', height: '240px', width: '100%'}}
        >
        <Stack 
          direction='row'
          gap='20px'
          sx={{justifyContent: { xs: 'center', lg: 'flex-start' }}}>
          <a href='https://github.com/cittaz' className='footer--link' target='_blank'>GitHub</a>
          <a href='https://www.linkedin.com/in/tommaso-cittadino' className='footer--link' target='_blank'>LinkedIn</a>
          <a href='https://cittaz.github.io/' className='footer--link' target='_blank'>Portfolio</a>
          <h4 className='footer--s2i' style={{marginLeft: 'auto'}}>Training project on ReactJS,<br/>
          thanks to <a href='https://www.start2impact.it/' className='footer--link' target='_blank'>Start2Impact</a> for their guidance</h4>
        </Stack>
        <Stack direction='row'
          justifyContent='space-between'>
          <Typography fontWeight={600} color='gray' fontSize='16px'>© 2023 Tommaso Cittadino, All right reserved</Typography>
          <Stack direction='row' gap='18px'>
            <a href='https://spoonacular.com/food-api' className='footer--link' target='_blank'>Spoonacular</a>
            <a href='https://www.pexels.com/it-it/' className='footer--link' target='_blank'>Pexels</a>
            <a href='https://openai.com/blog/openai-api' className='footer--link' target='_blank'>OpenAI</a>
          </Stack>
        </Stack>
      </Stack>
  )
}

export default Footer