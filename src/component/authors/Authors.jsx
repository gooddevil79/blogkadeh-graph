import React from 'react';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/queries';

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_ALL_USERS);
  if (loading) return <p>در حال بارگذاری...</p>;
  if (errors) return <p>خطا! مشکلی به وجود آمده است..</p>;
  return (
    <Grid
      container
      sx={{
        borderRadius: 3,
        boxShadow: 'rgba(0,0,0,0.1) 0px 5px 10px 1px',
        padding: '10px',
      }}
    >
      {data?.authors.map((author, index) => {
        return (
          <React.Fragment key={author.id}>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Link
                to={`/authors/${author.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                }}
              >
                <Avatar src={author.avatar.url} />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index !== data.authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" sx={{ margin: 1 }} />
              </Grid>
            )}
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

export default Authors;
