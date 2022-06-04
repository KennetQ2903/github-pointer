import { StyleSheet, TextInput } from 'react-native'
import { theme } from '../theme'

export const StyledTextInput = ({ style = {}, ...props }) => {
  const { placeholder = 'text...' } = props
  const inputStyle = {
    ...styles.textInput,
    ...style
  }
  return (
    <TextInput style={inputStyle} placeholder={placeholder} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20
  }
})
