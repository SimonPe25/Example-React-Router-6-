import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';





const Loginpage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';
 
    const handleSubmit = (event) => {
     event.preventDefault();
     const form = event.target;
     const user = form.username.value;

     signin(user, () => navigate(fromPage, {replace: true}));

     console.log("form", form);
     console.log("user", user);

 }
    

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Loginpage;
