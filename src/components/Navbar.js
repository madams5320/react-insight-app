import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import material ui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Psychology } from '@mui/icons-material';

// pages array
const pages = [
  { id: 1, name: 'Information', link: '/information' },
  { id: 2, name: 'About', link: '/about' },
];

const Navbar = ({ color, buttonColor, menuIcon }) => {

  // useState for menu
  const [open, setOpen] = useState(false);

  return (
    // hover navbar
    <AppBar
      position="static"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* display logo & name - screens medium & bigger */}
          <Psychology
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: buttonColor === 'white' ? 'white' : 'black',
            }}
          />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              color={color}
              sx={{
                mr: 6,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              InSight
            </Typography>
          </Link>

          {/* display menu icon - screens extra small & small */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="pages"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setOpen(true)}
              color={menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={(e) => setOpen(false)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} style={{ textDecoration: 'none' }}>
                  <MenuItem key={page.id}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* display logo & name - screens extra small & small */}
          <Psychology
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              color: buttonColor === 'white' ? 'white' : 'black',
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            color={color}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            InSight
          </Typography>

          {/* display pages - screens medium & bigger */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              mt: 0.5,
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} style={{ textDecoration: 'none' }}>
                <Button
                  key={page.id}
                  sx={{
                    my: 2,
                    color: buttonColor === 'white' ? 'white' : 'black',
                    display: 'block',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
