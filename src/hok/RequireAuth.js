import React from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
    console.log("Объект Юзера", user);

    if (!user) {
        return <Navigate to='/login' state={{from:location}}/>
    }
    return children;
};

export  {RequireAuth};