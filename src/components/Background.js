import React from 'react'

import { Box } from '@mui/material'
import Navbar from './Navbar'
import Intro from './Intro'

const Background = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("../images/javier-miranda-Jn2EaLLYZfY-unsplash.jpg")`,
          backgroundSize: 'cover',
        }}
      >
        <Navbar />
        <Intro />
      </Box>
    </>
  )
}

export default Background