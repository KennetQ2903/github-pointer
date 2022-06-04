import { StyleSheet, Text } from 'react-native'
import { theme } from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading
  },
  Heading: {
    fontSize: theme.fontSizes.Head
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})

export const StyledText = ({ children, color, fontSize, fontWeight, align, style, ...resOfProps }) => {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subHeading,
    fontSize === 'head' && styles.Heading,
    fontWeight === 'bold' && styles.bold,
    style
  ]
  return (
    <Text style={textStyles} {...resOfProps}>
      {children}
    </Text>
  )
}
