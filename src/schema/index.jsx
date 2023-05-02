import * as Yup from 'yup'

export const loginSchema = Yup.object({

  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export const signInSchema = Yup.object({
  name: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
})
export const addPrinterform = Yup.object({
  name: Yup.string().required('name is required'),

})
