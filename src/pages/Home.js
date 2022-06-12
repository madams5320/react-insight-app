import { Box } from '@mui/material';
import React from 'react';

// import components
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';

const color = 'inherit';
const buttonColor = 'white';
const menuIcon = 'inherit';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          // background image
          backgroundImage: `url("../images/javier-miranda-Jn2EaLLYZfY-unsplash.jpg")`,
          backgroundSize: 'cover',
        }}
      >
        {/* navigation bar */}
        <Navbar color={color} buttonColor={buttonColor} menuIcon={menuIcon} />

        {/* page description */}
        <Intro />
      </Box>
    </>
  );
};

export default Home;
