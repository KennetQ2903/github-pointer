import { Formik, useField } from 'formik'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { theme } from '../theme'
import { StyledText } from '../components/StyledText'
import { LoginValidationSchema } from '../validations/login.js'
const initialValues = {
  email: '',
  password: ''
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <TextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

export const LoginForm = () => {
  return (
    <Formik
      validationSchema={LoginValidationSchema}
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikInputValue
            style={styles.textInput}
            name='email'
            placeholder='Email'
          />

          <FormikInputValue
            style={styles.textInput}
            placeholder='Password'
            name='password'
            secureTextEntry
          />
          <Button onPress={handleSubmit} title='Log in' />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 15
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20
  },
  error: {
    color: theme.colors.error,
    paddingLeft: 3
  }
})
