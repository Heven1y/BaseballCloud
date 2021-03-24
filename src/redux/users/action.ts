import React from 'react'
import { IUser} from '../../interfaces'
import { ACTIVE_USER } from './types'

export const setActiveUserAction = (user:IUser, session: any) => {
    return {
        type: ACTIVE_USER,
        payload: {
            user: user,
            session: session
        }
    }
}