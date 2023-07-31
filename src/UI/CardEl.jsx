import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CardEl = ({ title, author, id, slug, image }) => {
  return (
    <Card
      sx={{ borderRadius: 3, boxShadow: 'rgba(0,0,0,0.1) 0px 5px 10px 1px' }}
    >
      <CardHeader
        avatar={<Avatar src={author.avatar.url} />}
        title={
          <Typography
            component="p"
            variant="p"
            color="text.secondary"
            fontWeight={500}
            sx={{ marginRight: 2 }}
          >
            {author.name}
          </Typography>
        }
      />
      <CardMedia component={'img'} image={image.url} height="150" alt={slug} />
      <CardContent>
        <Typography component={'h1'} variant="h6">
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: 1 }} />
      <CardActions>
        <Link to={`/blogs/${slug}`}>
          <Button variant="outlined" fullWidth sx={{ borderRadius: 3 }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEl;
