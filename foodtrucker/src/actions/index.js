import axiosWithAuth from '../utils/axiosWithAuth';
import history from '../utils/history';
import axios from 'axios';

export const USER_REGISTER_START = 'USER_RREGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const CHECK_VENDOR  = 'CHECK_VENDOR'


export const signupForm = (user) => dispatch => {


    dispatch({ type: USER_REGISTER_START })
    console.log(user)

    axiosWithAuth()
        .post('/auth/register', user)
        .then(res => {
            console.log(res.data)
            // dispatch({type: USER_REGISTER_SUCCESS, payload: res.data})
            // localStorage.setItem('token', res.data.token)
            history.push('/login')
        })
        .catch(err => {
            // dispatch({type: USER_REGISTER_FAIL, payload: 'All fields must be filled out'})
        })
}

export const checkVendor = (isVendor) => dispatch => {

    dispatch({ type: CHECK_VENDOR, payload: isVendor })


}