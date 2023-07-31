import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import React from 'react';

const BlogPage = () => {
  const { loading, data, errors } = useQuery();
  return (
    <div>
      <Typography variant="p" component={'p'}>
        Blogs
      </Typography>
    </div>
  );
};

export default BlogPage;
