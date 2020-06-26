import axiosWithAuth from '../utils/axiosWithAuth';
export const CHECK_VENDOR  = 'CHECK_VENDOR'
export const GET_TRUCKS = 'GET_TRUCKS'
export const FAVE_TRUCKS = 'FAVE_TRUCKS'
export const FILTER_TRUCKS = 'FILTER_TRUCKS'
export const SAVE_TRUCK = 'SAVE_TRUCK'
export const REMOVE_TRUCK = 'REMOVE_TRUCK'

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

export const filterTrucks = (filteredList) => dispatch => {
    dispatch({ type: FILTER_TRUCKS, payload: filteredList })
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

export const saveTruck = (savedTruck) => dispatch => {
    dispatch({type: SAVE_TRUCK, payload: savedTruck})
}

export const removeTruck = (newFaves) => dispatch => {
    dispatch({type: REMOVE_TRUCK, payload: newFaves})
}

export const editTruck = (truck) => dispatch => {

    axiosWithAuth()
        .put(`/trucks/${truck.id}`)
        .then(res => {
        console.log(res)
        dispatch({ type: FAVE_TRUCKS, payload: res.data })
    })
        .catch(err => { console.log(err) })

}