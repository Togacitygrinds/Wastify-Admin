import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://wastify-backend.onrender.com',
    withCredentials: false
})

export default Axios