import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals';
import Landing from './components/landingpage.jsx'; // Assuming correct file path and extension
import User from './components/user.jsx'; // Assuming correct file path and extension
import LeaderBoard from './components/leaderboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Render the App component at the root */}
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing page route */}
        <Route path="/user" element={<User />} /> {/* User route */}
        <Route path="/leaderboard" element={<LeaderBoard />} /> {/* LeaderBoard route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
