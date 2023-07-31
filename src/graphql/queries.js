import { gql } from '@apollo/client';
// posts

const GET_POSTS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      image {
        url
      }
    }
  }
`;
// users

const GET_ALL_USERS = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_POSTS_INFO, GET_ALL_USERS };
