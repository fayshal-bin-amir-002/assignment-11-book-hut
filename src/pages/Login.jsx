import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {

    const { user,  userLogin, googleLogIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(() => {
                const user = { email };
                axios.post('https://book-hut-server-side.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        if (res.data.success) {
                            form.reset();
                            toast.success('User logged in successfully.');
                            navigate(location?.state ? location.state : "/");
                        }
                    })
            })
            .catch(() => {
                toast.error("Invalid email/password");
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((result) => {
                axios.post('https://book-hut-server-side.vercel.app/jwt', { email: result?.user?.email }, { withCredentials: true })
                    .then(res => {
                        if (res.data.success) {
                            toast.success('User logged in successfully.');
                            navigate(location?.state ? location.state : "/");
                        }
                    })
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    if(user) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-398px)] py-8 md:py-10 lg:py-14">
            <form onSubmit={handleSubmit} className="w-[90%] md:w-2/3 lg:w-[600px] bg-[#8DECB4] p-6 lg:p-10 rounded-lg shadow-lg bg-opacity-30">
                <label className="input input-bordered rounded-full flex items-center gap-2 focus:outline-none mb-6 lg:mb-8">
                    Email
                    <input type="email" name="email" className="grow focus:outline-none" required />
                </label>
                <label className="input input-bordered rounded-full flex items-center gap-2 focus:outline-none relative mb-8 lg:mb-12">
                    Password
                    <input name="password" type={show ? 'text' : 'password'} className="grow focus:outline-none" required />
                    <span onClick={() => setShow(!show)} className="absolute right-5 bottom-3 text-2xl cursor-pointer">
                        {
                            show ? <IoIosEye /> : <IoIosEyeOff />
                        }
                    </span>
                </label>
                <button className="btn w-full rounded-full bg-[#41B06E] text-white text-lg border-none">Login</button>
                <p className="mt-3">Don&apos;t have an account? <Link to='/register' className="text-[#41B06E] underline font-semibold">Register</Link></p>
                <div className="divider"></div>
                <div className="flex justify-center flex-col items-center gap-4">
                    <button onClick={handleGoogleLogIn}><img src="/google.png" alt="" className="w-10" /></button>
                    <p className="font-medium opacity-80">Continue With Google</p>
                </div>
            </form>
        </div>
    );
};

export default Login;