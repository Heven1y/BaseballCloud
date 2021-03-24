import React from 'react'
import {REG_USER, ACTIVE_USER} from '../users/types'

const initialState = {
    session: {}
}

export const sessionReducer = (state:any = initialState, action:any) => {
    switch (action.type){
        case ACTIVE_USER: return {
            ...state,
            session: action.payload.session
        }
        default: return state
    }
}