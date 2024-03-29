import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/OhMyVeg2.png';

const Navbar = () => {
  return (
    <Stack 
      direction='row' 
      justifyContent='space-around' 
      alignItems='center'
      sx={{ 
        gap: {
        sm: '55px', xs: '40px'
        },
        mt: {
          sm: '32px', xs: '20px'
        },
        justifyContent: 'none'}}
        px='20px'>
      <Link to='/'>
        <img id='logo-img' src={Logo} alt='logo' style={{
          margin: '0 20px'
          }} 
        />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to='/' style={{
          textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #38b54a', marginBottom: '25px'
        }}>Home</Link>
        <a className='navbar--recipes' href='#recipes' style={{
          textDecoration: 'none', color: '#3A1212', marginBottom: '25px'
        }}>Recipes</a>
      </Stack>

    </Stack>
  )
}

export default Navbar