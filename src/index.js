import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Apropos from './pages/Apropos.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Error from './pages/Error.jsx';
import Location from './pages/Location.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
        <Route path="/Location/:id" element={<Location />}/>
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
