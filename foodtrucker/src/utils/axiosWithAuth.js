import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://food-truckr-app.herokuapp.com/api',
        headers: {
            Authorization: `${token}`,
        },
        credentials: "include"
    })
}

export default axiosWithAuth