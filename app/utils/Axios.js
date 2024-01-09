import axios from "axios";

const Axios = axios.create({
    // baseURL: 'https://wastify-backend.onrender.com',
    baseURL: "http://localhost:8001",

})

export default Axios