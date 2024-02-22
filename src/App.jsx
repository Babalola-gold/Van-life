import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Host from './component/Host';
import Van from './component/Van';
import Dashboard from './component/Dashboard';
import Incomepage from './component/Incomepage';
import VanInner from './component/VanInner';
import Review from './component/Review';
import VanDash from './component/VanDash';
import VanD from './component/VanD';
import Signup from './component/auth/Signup';
import Signin from './component/auth/Signin';
import Errorpage from './component/error/Errorpage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/van" element={<Van />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/api/vans/:id" element={<VanD />} />
          <Route path="/" element={<Host />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Incomepage />} />
            <Route path="/host/van" element={<VanInner />} />
            <Route path="/host/reviews" element={<Review />} />
            <Route path="/host/vans/:id" element={<VanDash />} />



          </Route>


        </Route>
      </Routes>


    </>
  );
}

export default App;
