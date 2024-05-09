import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if(loading) {
        return <Loader></Loader>
    }

    if(!user) {
        return <Navigate to="/login" state={location?.pathname}></Navigate>
    }

    return children;
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;