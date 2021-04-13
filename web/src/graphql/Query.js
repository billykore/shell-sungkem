import {gql} from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      email
      firstName
      lastName
    }
  }
  
`