import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div className="font-lato container mx-auto px-5">
            <NavBar></NavBar>
            {
                navigation.state === 'loading' ?
                    <Loader></Loader> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;