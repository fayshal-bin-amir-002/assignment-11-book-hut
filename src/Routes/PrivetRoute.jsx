import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user } = useAuth();

    const location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={location?.pathname}></Navigate>
    }

    return children;
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;