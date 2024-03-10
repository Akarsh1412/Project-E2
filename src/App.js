import React, { useState } from 'react';
import './App.css';
import Landing from './components/landingpage.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js'

function App() {
  switch (window.location.pathname) {
    case "/":
      return <Landing />;
    case "/login":
        return <Login />;
    case "/sign-up":
        return <Signup />;
    default:
        return <Login />;
   }
}

export default App;
