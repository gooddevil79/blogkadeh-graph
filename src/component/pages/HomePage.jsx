import { Container, Grid } from '@mui/material';
import React from 'react';
import Authors from '../authors/Authors';
import Blogs from '../blogs/Blogs';

const HomePage = () => {
  return (
    <Container maxWidth={'lg'} sx={{ marginTop: 6 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <h1>نویسندگان</h1>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <h1>بلاگها </h1>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
