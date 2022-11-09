import React, { useContext } from 'react';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';
// import { useLocation } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    if (loading) {
        return <h1 className='fs-5'>Loading...</h1>
    }

    if (user) {
        return children;
    }

    // const notify = () => toast('Please login to add a review.');

    return (
        < div className='my-5'>
            <h2>Please login to add a review.</h2>
            <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"> <Link to={`/login`}> <span className='fw-bold'>Please Login</span></Link></button>

            {/* <Navigate to="/login" state={{ from: location }} replace> Login</Navigate>; */}
        </div >
    );




};

export default PrivateRoute;