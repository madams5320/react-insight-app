import { Box, Typography } from '@mui/material';
import React from 'react';

const Intro = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Box
          color="common.white"
          width={700}
          height={280}
          textAlign="center"
          
        >
          <Typography variant="h3" mb={2}>
            Learn More About Our World's Geography
          </Typography>
          <Typography>
            Geography helps us to explore and understand space and place -
            recognising the great differences in cultures, political systems,
            economies, landscapes and environments across the world, and
            exploring the links between them.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Intro;
