import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FlightSearch from './FightNav/FlightSearchComponent';
import PrivateRoutes from './utils/PrivateRoute';
import Navbar from './Navbar';
import Signup from './Signup';
import Mytrips from './Mytrips';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import Singupsuccess from './Singupsuccess';
import { fetchCountries, fetchAirports, fetchUser, loginUser, logoutUser, postFavorite, fetchFavorites  } from '../redux/actionCreators';
import { useLocation, Routes, Route, useNavigate} from 'react-router-dom';
import { AnimatePresence} from "framer-motion/dist/framer-motion";

function Main(){
    const location = useLocation()
    const navigate = useNavigate()

    const airports = useSelector(state => state.airports)
    const flights = useSelector(state => state.flights)
    const countries = useSelector(state => state.countries)

    const favorites = useSelector(state => state.favorites)
    const auth = useSelector(state => state.auth)

    // const { user } = useAuth()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCountries())
        dispatch(fetchAirports())
        dispatch(fetchUser())
    }, [])

        return(
        <div className="content-background">
            <AuthProvider>
            <Navbar/>
            <AnimatePresence>
                
                    <Routes location={location} key={location.path}>
                        <Route
                            path ='/'
                            element={<FlightSearch flights={flights} airports={airports} countries={countries} auth={auth}/>} exact/>
                        <Route path='/signup' element={<Signup navigate={navigate}/>} />
                        <Route path='/signup/success' element={<Singupsuccess/>} />
                        <Route path="/mytrips" element={<PrivateRoutes/>}>
                            <Route path="" element={<Mytrips/>}/>
                        </Route>
                    </Routes>
                
            </AnimatePresence>
            </AuthProvider>
        </div>
        )
}

export default Main