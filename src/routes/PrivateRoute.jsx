import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"; // ✅ Import PropTypes for validation
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <progress className="progress w-56"></progress>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

// ✅ Props validation
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
