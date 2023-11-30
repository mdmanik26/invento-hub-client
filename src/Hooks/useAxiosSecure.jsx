import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const axiosSecure = axios.create(
    {
        baseURL: 'https://invento-hub-server.vercel.app'
    }
)
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

   
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
       
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    });


   
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
    
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')

        }
        return Promise.reject(error);
    });




   

    return axiosSecure
};

export default useAxiosSecure;