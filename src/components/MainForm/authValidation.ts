import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const AuthRequestDtoValidationSchema = yupResolver(
  yup.object({
    firstName: yup.string().required('First name is required field'),
    lastName: yup.string().required('Last name is required field'),
    email: yup.string().required('Email is required field'),
    password: yup.string().required('Password is required field'),
    country: yup.string().required('Country is required field'),
    city: yup.string().required('City is required field'),
  }),
)
