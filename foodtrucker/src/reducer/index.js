import {
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    CHECK_VENDOR,
    GET_TRUCKS,
    FAVE_TRUCKS,
} from '../actions'


export let intitialState = {
    isVendor: false,
    myTrucks: [],
    faveTrucks: [],
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case CHECK_VENDOR:
            console.log(action.payload)
            return {
                ...state,
                isVendor: action.payload
            }
        case GET_TRUCKS:
            return {
                ...state,
                myTrucks: action.payload
            }
        case FAVE_TRUCKS:
            return {
                ...state,
                faveTrucks: action.payload
            }
        default:
            return state
    }
}