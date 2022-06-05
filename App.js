import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from './src/utils/ApolloClient'
export default function App () {
  return (
    <ApolloProvider client={createApolloClient}>
      <StatusBar style='dark' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}
