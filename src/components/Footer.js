import React from 'react';
import {Stack, Typography, Box} from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" px="40px" pt="24px" alignItems="center">
          <img src={Logo} width="200px" height="40px" alt="logo"/>
          <Typography variant="h5" mt="20px" pb="40pxx">
            Made by Vivek Mashru
          </Typography>
      </Stack>
    </Box>
    
  );
}

export default Footer;