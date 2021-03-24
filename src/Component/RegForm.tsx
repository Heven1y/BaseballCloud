import React from 'react'

import {Form, Field} from 'react-final-form'
import { useHistory } from 'react-router-dom'
import { register } from '../API/api'
import { useAppDispatch } from '../redux/hooks'
import { setActiveUserAction } from '../redux/users/action'

type RegProps = {
  role: boolean
}

export const RegisterForm:React.FC<RegProps> = (props) => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const [status, setStatus] = React.useState(true)
    return (
        <Form
        onSubmit={async (value) => { 
          console.log(value)
          const answer = await register(value, props.role)
          setStatus(answer.success)
          if(answer.success){
            dispatch(setActiveUserAction({active: true, id: answer.data.id}, answer.headers))
            history.push("/profile")
          }
        }}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine}) => (
          <form onSubmit={handleSubmit} className='form-input-login'>
            <div>
            <Field name="email">
                {props => (
                    <input {...props.input} className="login-input" placeholder='Email' type='email' />
                )}
            </Field>
            </div>
            <div>
            <Field name="password">
                {props => (
                    <input {...props.input} className="login-input" placeholder='Password' type='password' />
                )}
            </Field>
            </div>
            <div>
            <Field name="confirm_pass">
                {props => (
                    <input {...props.input} className="login-input" placeholder='Confirm password' type='password' />
                )}
            </Field>
            </div>
            <div className="buttons">
            <p style={{marginTop: 10}}>By clicking Sign Up, you agree to our <a href='https://baseballcloud-front.herokuapp.com/legal/terms'> Terms of Service </a> 
            and 
            <a href='https://baseballcloud-front.herokuapp.com/legal/privacy'> Privacy Policy</a>.</p>
              <button type="submit" disabled={submitting || pristine} className="btn btn-primary button-submit-signup">
                Sign Up
              </button>
            </div>
          </form>
        )}
      />
    )
}