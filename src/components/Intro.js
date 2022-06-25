import React from 'react';
import { Link } from 'react-router-dom';

// import material ui components
import { Box, Fab, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Intro = () => {
  return (
    <>
      {/* big screens only */}
      <Box
        position="relative"
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box
          position="absolute"
          color="common.white"
          width={700}
          height={280}
          textAlign="center"
          bottom={180}
        >
          {/* geography information */}
          <Typography variant="h3" mb={2} fontWeight="bold">
            Learn More About Our World's Geography
          </Typography>
          <Typography>
            Geography helps us to explore and understand space and place -
            recognising the great differences in cultures, political systems,
            economies, landscapes and environments across the world, and
            exploring the links between them.
          </Typography>

          {/* button to information page */}
          <Link to="/information" style={{ textDecoration: 'none' }}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              sx={{ mt: 5 }}
            >
              Learn More
              <ArrowRightAltIcon sx={{ ml: 1 }} />
            </Fab>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Intro;
