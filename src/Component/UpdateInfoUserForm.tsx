import React from 'react'
import {Form, Field} from 'react-final-form'
import {signIn} from '../API/api'
import { useAppDispatch } from '../redux/hooks'
import { setActiveUserAction } from '../redux/users/action'
import {useHistory} from 'react-router-dom'

type FormProp = {
    updateEdit():void
}

export const UpdateForm:React.FC<FormProp> = (props) => {
    const dispatch = useAppDispatch()
    return (
        <Form
        onSubmit={async (value) => { 
          console.log(value)
        }}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine}) => (
          <form onSubmit={handleSubmit} className='form-input-login'>
            <div className='username-container'>
            <Field name="frist_name">
                {props => (
                    <input {...props.input} className="update-input" placeholder='First name' type='text' />
                )}
            </Field>
            <Field name="last_name">
                {props => (
                    <input {...props.input} className="update-input" placeholder='Last name' type='text' />
                )}
            </Field>
            </div>
            <div className="username-container">
              <button onClick={props.updateEdit} className="btn btn-primary button-submit">
                Cancel
              </button>
              <button type="submit" onClick={props.updateEdit} disabled={submitting || pristine} className="btn btn-primary button-submit">
                Save
              </button>
            </div>
          </form>
        )}
      />
    )
}