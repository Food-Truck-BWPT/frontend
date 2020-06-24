import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    // const COOKIE = req.session.cookie

    return axios.create({
        baseURL: 'https://food-truckr-app.herokuapp.com/api',
        headers: {
            Authorization: `${token}`,
        },
    })
}

export default axiosWithAuth