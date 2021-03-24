import React from 'react'
import {Form, Field} from 'react-final-form'
import {signIn} from '../API/api'
import { useAppDispatch } from '../redux/hooks'
import { setActiveUserAction } from '../redux/users/action'
import {useHistory} from 'react-router-dom'

export const LoginForm:React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory();
    const [status, setStatus] = React.useState(true)
    return (
        <Form
        onSubmit={async (value) => { 
          console.log(value)
          const answer = await signIn(value)
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
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine} className="btn btn-primary button-submit">
                Sign In
              </button>
            </div>
            <p style={status ? {display: 'none'} : {display: 'block', textAlign: 'center', width: '100%', color: 'red'}}>Invalid login credentials. Please try again.</p>
          </form>
        )}
      />
    )
}