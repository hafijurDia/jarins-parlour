import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000/'
})

const UseSecureAxios = () => {
    return axiosPublic;
};


export default UseSecureAxios;
