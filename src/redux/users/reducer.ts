import React from 'react'
import {IUser} from '../../interfaces'
import {REG_USER, ACTIVE_USER} from './types'

const initialState = {
    user: {
        active: false,
        id: 0,
        name: ''
    }
}

export const userReducer = (state:any = initialState, action:any) => {
    switch (action.type){
        case ACTIVE_USER: return {
            ...state,
            user: action.payload.user
        }
        default: return state
    }
}