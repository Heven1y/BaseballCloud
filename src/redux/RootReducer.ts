import React from 'react'
import {combineReducers} from 'redux'
import { userDataReducer } from './profileUser/reducer'
import { sessionReducer } from './session/reducer'
import {userReducer} from './users/reducer'
export const AppReducer = combineReducers({
    user: userReducer,
    session: sessionReducer,
    data_user: userDataReducer
})

const RootReducer = (state:any, action:any) => {
    if(action.type === 'RESET_STORE'){
        state = undefined
    }
    return AppReducer(state, action)
  }

export default RootReducer