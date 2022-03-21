import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Aboutpage from './pages/Aboutpage.jsx';
import Homepage from './pages/Homepage.jsx';
import Blogpage from './pages/Blogpage.jsx';
import NotfaundPage from './pages/NotfaundPage.jsx';
import Singlepage from './pages/Singlepage.jsx';
import Createpost from './pages/Createpost.jsx';
import Editpost from './pages/Editpost.jsx';
import Loginpage from './pages/Loginpage.jsx';

import {Layout} from './components/Layout.jsx';

import {RequireAuth} from './hok/RequireAuth.js';
import {AuthProvider} from './hok/AuthProvider.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Homepage/>}/>
           <Route path='about/' element={<Aboutpage/>}>
           <Route path='contacts' element={<p>Our contact</p>}/>
            <Route path='team' element={<p>Our team</p>}/>
             </Route>
           <Route path='about-us' element={<Navigate to="/about" replace/>}/>
           <Route path='posts' element={<Blogpage/>}/>
           <Route path='posts/:id' element={<Singlepage/>}/>
           <Route path='posts/:id/edit' element={<Editpost/>}/>
           <Route path='posts/new' element={
             <RequireAuth>
               <Createpost/>
             </RequireAuth>
           }/>
           <Route path='login' element={<Loginpage/>}/>
           <Route path='*' element={<NotfaundPage/>}/>
        </Route>
      </Routes>
      </AuthProvider>
      </div>
      

    </div>
  );
}

export default App;
