import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {

    const { user, userRegister, userProfileUpdate, userLogOut } = useAuth();

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/;

        if (password.length < 6) {
            return toast.error("Minimum password length 6!");
        }

        if (!regex.test(password)) {
            toast.error("Password should be contain minimum one uppercase and one specail character!");
            return;
        }

        userRegister(email, password)
            .then(() => {
                userProfileUpdate(name, photo)
                    .then(() => {
                        userLogOut()
                            .then(() => {
                                form.reset();
                                navigate('/login');
                                toast.success('User register successfully.')
                            })
                            .catch(error => {
                                toast.error(error.message);
                            })
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    if (user) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh - 415px)] py-6 md:py-8 lg:py-12">
            <form onSubmit={handleSubmit} className="w-[90%] md:w-2/3 lg:w-[600px] bg-[#8DECB4] p-6 lg:p-10 rounded-lg shadow-lg bg-opacity-30">
                <label className="input input-bordered rounded-full flex items-center gap-2 focus:outline-none mb-6 lg:mb-8">
                    Name
                    <input type="name" name="name" className="grow focus:outline-none" required />
                </label>
                <label className="input input-bordered rounded-full flex items-center gap-2 focus:outline-none mb-6 lg:mb-8">
                    Photo URL
                    <input type="text" name="photo" className="grow focus:outline-none" required />
                </label>
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
                <button className="btn w-full rounded-full bg-[#41B06E] text-white text-lg border-none">Register</button>
                <p className="mt-3">Already have an account? <Link to='/login' className="text-[#41B06E] underline font-semibold">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;