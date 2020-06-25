import {
    CHECK_VENDOR,
    GET_TRUCKS,
    FAVE_TRUCKS,
} from '../actions/actions'

export let intitialState = {
    isVendor: false,
    allTrucks: [],
    filteredTrucks: [],
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
                allTrucks: action.payload
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