import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-lato container mx-auto px-5">
            <p>this is main</p>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;