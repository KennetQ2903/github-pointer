import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { theme } from '../theme'

export const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
