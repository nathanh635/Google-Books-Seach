import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query matchups {
    getAllMatchups{

      _id
tech1tech2
tech1_votes
tech2_votes
      }
  }
`;

export const QUERY_TECH = gql`
  query getTechs {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_MATCHUP = gql`
  query getSingleMatchup($_id: ID!) {
    # thought(thoughtId: $thoughtId) {
    #   _id
    #   thoughtText
    #   thoughtAuthor
    #   createdAt
    #   comments {
    #     _id
    #     commentText
    #     commentAuthor
    #     createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
