import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string,ref } from 'yup'
import type { RegisterFormValues} from '../../types/types'
import './RegisterForm.scss'
const initialValues :RegisterFormValues ={
 username: '',
  password: '',
  confirmPassword:'',
  email: ''
}

function RegisterForm() {
  const schema =object({
      username: string()
      .min(3, 'username must be at least 3 charecters')
      .max(10, 'username must be at 10 charecters')
      .required('username is required'),
    password: string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'password must contain uppercase, lowercase, number and special charecters'
      )
      .required('password is required'),
      confirmPassword:string()
        .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm password is required'),

      email:string().email('iInvalid email').required('Email is required')
  })
     const  handleSubmit=(values:RegisterFormValues )=>{
    console.log(values);
  
     
   }
  return (
    <div className='RegisterForm'>
      <h1 className='RegisterForm_title'>Register</h1>
 <Formik
 initialValues ={initialValues}
  onSubmit={handleSubmit}
   validationSchema={schema}
      validateOnBlur={false}
 >
  <Form className='RegisterForm_Form' >
    <Field id='email'
            name='email'
            type='email'
            placeholder='email'
            />
     <ErrorMessage name='email' component='p' className='RegisterForm_emerror'/>
    <Field id='username'
            name='username'
            type='text'
            placeholder='username'
            />
     <ErrorMessage name='username' component='p' className='RegisterForm_userror'/>
     <Field id='password'
            name='password'
            type='password'
            placeholder='password'
            />
     <ErrorMessage name='password' component='p' className='RegisterForm_pserror'/>
      <Field
    id="confirmPassword"
    name="confirmPassword"
    type="password"
    placeholder="confirm password"
  />
  <ErrorMessage name='confirmPassword' component='p' className='RegisterForm_confirmpserror'/>
     
          <button className='RegisterForm_btn' type="submit">Register</button>
  </Form>
     
 </Formik>
    </div>
  )
}

export default RegisterForm