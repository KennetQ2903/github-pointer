import { View, StyleSheet, Image } from 'react-native'
import { theme } from '../theme'
import { StyledText } from './StyledText'

export const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{fullName}</StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 2,
    paddingBottom: 4
  },
  language: {
    padding: 4,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 6,
    overflow: 'hidden',
    textAlign: 'center'
  },
  imageContainer: {
    marginRight: 8
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5
  }
})
