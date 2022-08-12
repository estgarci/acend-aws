// import { useSelector } from 'react-redux'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

function PrivateRoutes({children}) {
    const { auth } = useAuth();
    return (auth.user.username?children: <Navigate to='/'/>)
    } 

export default PrivateRoutes