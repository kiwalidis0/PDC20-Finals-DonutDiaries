import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set the home route */}
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/" /> : <Login setLoggedIn={setLoggedIn} />} 
        />
        <Route path="/register" element={<Register />} />
        {isLoggedIn && <Route path="/blog" element={<Blog />} />}
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={< Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
