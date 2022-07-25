import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: tech1, tech2: tech2) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
