import ApolloClient from 'apollo-boost'

export const createApolloClient = () => new ApolloClient({
  uri: 'http://192.168.0.3:4000/graphql'
})
