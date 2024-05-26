import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://book-hut-server-side.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { userLogOut } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use((res) => {
            return res;
        }, (error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                userLogOut()
                    .then(() => {
                        navigate('/login');
                    })
            }
        })
    }, [navigate, userLogOut]);

    return axiosSecure;
};

export default useAxiosSecure;

// https://book-hut-server-side.vercel.app