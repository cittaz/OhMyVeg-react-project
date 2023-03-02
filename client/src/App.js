import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { ImprovedImageContext } from './utils/Contexts';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Footer from './components/Footer';

const App = () => {
  
  const [improveImages, setImproveImages] = useState(false)

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m='auto'>
      <ImprovedImageContext.Provider value={{improveImages, setImproveImages}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
        <Footer />
      </ImprovedImageContext.Provider>
    </Box>
  )
}

export default App