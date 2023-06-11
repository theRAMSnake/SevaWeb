import React from 'react';
import logo from './logo.png';
import config from './config.json';
import { Box } from '@mui/system';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Facebook, Instagram, Phone, Email, WhatsApp } from '@mui/icons-material';

const Navigation = () => {

  return (
  <AppBar position="static" sx={{ bgcolor: 'purple' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '& .center': {
            display: 'flex',
            justifyContent: 'center',
            flex: '1',
          },
        }}
      >
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        <Box className="center">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Appointment</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" href={config.facebookLink}>
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href={config.instagramLink}>
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href={config.phoneLink}>
              <Phone />
            </IconButton>
            <IconButton color="inherit" href={config.emailLink}>
              <Email />
            </IconButton>
            <IconButton color="inherit" href={config.whatsappLink}>
              <WhatsApp />
            </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
