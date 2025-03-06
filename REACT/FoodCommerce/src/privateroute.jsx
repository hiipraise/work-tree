import { useContext } from 'react';

import {Navigate} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

// Takes the children of pages you want to protect
const PrivateRoute = ({children}) => {
    const {token} = useContext (AuthContext)
    // const {isLogin} = localStorage.getItem('isLogin') || false;

    // if login is true, return children else navigate to login page.
    return token ? children : <Navigate to = '/login'/>
}

export default PrivateRoute