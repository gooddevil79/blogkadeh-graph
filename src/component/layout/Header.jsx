import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import React from 'react';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'crimson' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            component={'h1'}
            variant="h5"
            textAlign={'right'}
            fontWeight={700}
            flex={1}
          >
            وبلاگ کده
          </Typography>
          <FormatQuoteIcon fontSize="large" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
