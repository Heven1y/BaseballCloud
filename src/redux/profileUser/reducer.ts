import React from 'react'
import { LOAD_DATA_PROFILE_USER } from './types'

const initialState = {
    data_user: {}
}

export const userDataReducer = (state:any = initialState, action:any) => {
    switch (action.type){
        case LOAD_DATA_PROFILE_USER: return {
            ...state,
            data_user: action.payload
        }
        default: return state
    }
}