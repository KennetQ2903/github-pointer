import { Text, FlatList } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import Constants from 'expo-constants'
import { useRepositories } from '../hooks/useRepositories'
import { Spinner } from './Spinner'

export const RepositoryList = () => {
  const { repositories, loading } = useRepositories()
  if (loading) {
    return (
      <Spinner />
    )
  }
  return (
    <FlatList
      style={{ marginVertical: Constants.statusBarHeight }}
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}
