import React from 'react'
import axios from 'axios';

const API_URL_SIGN_IN:string = 'https://baseballcloud-back.herokuapp.com/api/v1/auth/sign_in'
const API_URL_SIGN_OUT:string = 'https://baseballcloud-back.herokuapp.com/api/v1/auth/sign_out'
const API_URL_REG:string = 'https://baseballcloud-back.herokuapp.com/api/v1/auth'
const API_URL_GRAPH_QL:string = 'https://baseballcloud-back.herokuapp.com/api/v1/graphql'
const queryProfileData:string = "{ current_profile ()\n {\n id\n first_name\n last_name\n position\n position2\n avatar\n throws_hand\n bats_hand\n biography\n school_year\n feet\n inches\n weight\n age\n school {\n id\n name\n }\n teams {\n id\n name\n }\n facilities {\n id\n email\n u_name\n }\n }\n }"
const queryUpdateDataProfile:string = "mutation UpdateProfile($form:UpdateProfileInput!)\n { update_profile (input:$form)\n { profile\n {\n id\n first_name\n last_name\n position\n position2\n avatar\n throws_hand\n bats_hand\n biography\n school_year\n … }\n }\n school {\n id\n name\n }\n teams {\n id\n name\n }\n facilities {\n id\n email\n u_name\n }\n }\n }\n }"
const queryGetSchools:string = "query Schools($search:String!)\n { schools(search: $search) {\n schools {\n id\n name\n }\n }\n }"
const queryGetTeams:string = "query Teams($search:String!)\n { teams(search: $search) {\n teams {\n id\n name\n }\n }\n }"

export const signIn = async (values:any) => {
    try{
    const answer = await axios.post(API_URL_SIGN_IN, {
            email: values.email,
            password: values.password
    });
    console.log(answer.headers)
    return {data: answer.data.data, success: true, headers: answer.headers}
    }
    catch(error){
        console.log(error)
        return {success: false}
    }
}

export const signOut = async (header:any) => {
    try{
    await axios.delete(API_URL_SIGN_OUT, {headers: header});
    return true
    }
    catch(error){
        console.log(error)
        return false
    }
}
export const register = async (values:any, role:boolean) => {
    const regRole:string = role ? 'player' : 'scout'
    try{
    const answer = await axios.post(API_URL_REG, {
                email: values.email,
                password: values.password,
                password_confirmation: values.confirm_pass,
                role: regRole
    });
    console.log(answer.headers)
    return {data: answer.data.data, success: true, headers: answer.headers}
    }
    catch(error){
        console.log(error)
        return {success: false}
    }
}
export const loadProfileUser = async (header:any) => {
    try{
    const answer = await axios.post(API_URL_GRAPH_QL, {query: queryProfileData}, {headers: header});
    return {data: answer.data.data.current_profile, success: true}
    }
    catch(error){
        console.log(error)
        return {success: false}
    }
}