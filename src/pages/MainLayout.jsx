import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import Loader2 from "../components/Loader2";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div className="font-lato container mx-auto px-5">
            <NavBar></NavBar>
            {
                navigation.state === 'loading' ?
                    <Loader2></Loader2> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;