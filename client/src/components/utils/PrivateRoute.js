// import { useSelector } from 'react-redux'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

const PrivateRoutes = () => {
    const { auth } = useAuth();
    return (auth.isAuthenticated?<Outlet/>: <Navigate to='/'/>)
    } 

export default PrivateRoutes