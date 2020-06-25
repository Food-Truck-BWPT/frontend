import {
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    CHECK_VENDOR,
} from '../actions'


export let intitialState = {
    isVendor: false,
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case CHECK_VENDOR:
            console.log(action.payload)
            return {
                ...state,
                isVendor: action.payload
            }
        default:
            return state
    }
}