import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export const USER_REGISTER_START = 'USER_RREGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const CHECK_VENDOR  = 'CHECK_VENDOR'
export const GET_TRUCKS = 'GET_TRUCKS'
export const FAVE_TRUCKS = 'FAVE_TRUCKS'


export const signupForm = (user) => dispatch => {

    const { push } = useHistory();

    dispatch({ type: USER_REGISTER_START })
    console.log(user)

    axiosWithAuth()
        .post('/auth/register', user)
        .then(res => {
            console.log(res.data)
            // dispatch({type: USER_REGISTER_SUCCESS, payload: res.data})
            // localStorage.setItem('token', res.data.token)
            push('/login')
        })
        .catch(err => {
            // dispatch({type: USER_REGISTER_FAIL, payload: 'All fields must be filled out'})
        })
}

export const checkVendor = (isVendor) => dispatch => {

    dispatch({ type: CHECK_VENDOR, payload: isVendor })


}
export const getTrucks = () => dispatch => {

    axiosWithAuth()
    .get('/trucks')
    .then(res => {
        dispatch({ type: GET_TRUCKS, payload: res.data })
    })
        .catch(err => { console.log(err) })

}
export const getFaveTrucks = () => dispatch => {

    axiosWithAuth()
    .get('/trucks')
        .then(res => {
        console.log(res)
        dispatch({ type: FAVE_TRUCKS, payload: res.data })
    })
        .catch(err => { console.log(err) })

}