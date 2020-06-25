import axiosWithAuth from '../utils/axiosWithAuth';
export const CHECK_VENDOR  = 'CHECK_VENDOR'
export const GET_TRUCKS = 'GET_TRUCKS'
export const FAVE_TRUCKS = 'FAVE_TRUCKS'

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