import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Typography
        variant="p"
        component={'p'}
        bgcolor={'f7f7f7f7'}
        color={'primary'}
        textAlign={'center'}
        padding={'10px'}
        mt={10}
      >
        وبلاگ کده، ساخته شده با ❤️ توسط مهران
      </Typography>
    </footer>
  );
};

export default Footer;
