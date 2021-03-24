import React from 'react'
import { LOAD_DATA_PROFILE_USER } from './types'


export const loadDataProfileUser = (profileData:any) => {
    return {
        type: LOAD_DATA_PROFILE_USER,
        payload: profileData
    }
}