import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query{ 
    repositories {
        edges{
            node{
              id
              ownerAvatarUrl
              fullName
              description
              language
              stargazersCount
              forksCount
              reviewCount
              ratingAverage
              language
            }
        }
    }
  }
`;

export const GET_REPO = gql`
  query repo($id: ID!){
    repository(id: $id) {
                id
                ownerAvatarUrl
                fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
                language
                url
                reviews {
                  edges {
                    node {
                      id
                      text
                      rating
                      createdAt
                      user {
                        id
                        username
                      }
                    }
                  }
                }
    }
  }
`;

export const GET_AUTHORIZEDUSER = gql`
  query{
    authorizedUser {
      id
      username
    }
  }
`;