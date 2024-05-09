import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {

    const contextData = useContext(AuthContext);

    return contextData;
};

export default useAuth;