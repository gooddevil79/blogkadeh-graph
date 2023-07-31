import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POSTS_INFO } from '../../graphql/queries';
import CardEl from '../../UI/CardEl';
import { Grid } from '@mui/material';

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_POSTS_INFO);
  if (loading) return <p>در حال بار گذاری...</p>;
  if (errors) return <p>مشکلی پیش آمده است!!</p>;
  return (
    <Grid container spacing={2}>
      {data?.posts.map(post => {
        return (
          <Grid key={post.id} item xs={12} sm={6} md={4}>
            <CardEl {...post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Blogs;
