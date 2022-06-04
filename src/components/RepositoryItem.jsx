import { View, StyleSheet } from 'react-native'
import { RepositoryItemHeader } from './RepositoryItemHeader'
import { RepositoryStats } from './RepositoryStats'

export const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    marginBottom: 20
  }
})
