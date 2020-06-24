import {
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from '../actions'

import { trucks } from "../api";

export let intitialState = {
    isVendor: false
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) { }
}