
import './LoginForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import type { LoginFormValues } from '../../types/types';



const initialValues:LoginFormValues ={
 username: '',
  password: '',
  email: ''
}
function LoginForm() {
    const schema = object({
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
      email:string().email('iInvalid email').required('Email is required')
  })

   const  handleSubmit=(values:LoginFormValues)=>{
  console.log(values);

   
 }
  return (
    <div className='LoginForm'>
        <h1 className='LoginForm_title'>Login</h1>
        <Formik 
         initialValues={initialValues}
       onSubmit={handleSubmit}
       validationSchema={schema}>
           <Form className='LoginForm_Form'>
            <Field id='username'
            name='username'
            type='text'
            placeholder='username'
            />
     <ErrorMessage name='username' component='p' className='LoginForm_userror'/>
          <Field id='password'
            name='password'
            type='password'
            placeholder='password'
            />
     <ErrorMessage name='password' component='p' className='LoginForm_pserror'/>
            <Field id='email'
            name='email'
            type='email'
            placeholder='email'
            />
     <ErrorMessage name='email' component='p' className='LoginForm_emerror'/>
      
     <button className='LoginForm_btn' type="submit">Login</button>
          
           </Form>
        </Formik>
    </div>
  )
}

export default LoginForm