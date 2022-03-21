import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Aboutpage = () => {
    return (
        <div>
            <h1>About Pages</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad animi magni totam fuga. Nam optio impedit nisi deleniti ipsam. Pariatur et tempore adipisci sit sapiente labore dolor harum tempora necessitatibus.</p>
        <ul>
            <li><Link to='contacts'>Our contact</Link></li>
            <li><Link to='team'>Our team</Link></li>
        </ul>
        {/* <Routes>
            <Route path='contacts' element={<p>Our contact</p>}></Route>
            <Route path='team' element={<p>Our team</p>}></Route>
        </Routes> */}
        <Outlet/>
        </div>
    );
};

export default Aboutpage;