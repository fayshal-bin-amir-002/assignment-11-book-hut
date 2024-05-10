import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-8 lg:gap-12">
            <p className="text-3xl lg:text-5xl font-medium text-red-400">Page Not Found!</p>
            <Link to="/" className="btn bg-[#41B06E] text-white text-lg font-medium">Go Home</Link>
        </div>
    );
};

export default ErrorPage;