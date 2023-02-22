import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RandomRecipe from './RandomRecipe';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data }) => {
  
  let newData = data[0];
  console.log(newData);
  if (newData) {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {newData.results.map((item) => (
          <Box
            key={item.id}
            itemID={item.id}
            title={item.title}
            m='0 40px'
          >
            <RandomRecipe image={item.image}  />
            {/* {item.title}
            <img src={item.image} /> */}
          </Box>
        )
        )}
      </ScrollMenu>
    )
  }
}

export default HorizontalScrollBar