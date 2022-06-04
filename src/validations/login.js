import * as yup from 'yup'

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password is to short')
    .max(25, 'Password is to long')
    .required('Password is required')
})
