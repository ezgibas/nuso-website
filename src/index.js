import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './styles/index.css';
import Home from './pages/Home';
import Auditions from './pages/Auditions';
import CourseRegistration from './pages/CourseRegistration';
import ConcertoCompetition from './pages/ConcertoCompetition.js';
import {About, AboutVideo} from './pages/About'
import Dues from './pages/Dues'
import reportWebVitals from './reportWebVitals';
import { displayCompetition } from './constants.js';
import NavBar from './pages/NavBar.js';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auditions" element={<Auditions />} />
        {/* TODO CREATE ALL THESE PAGES */}
        <Route path="about" element={<About />} />
        <Route path="about/video" element={<AboutVideo />} />
        <Route path="registration" element={<CourseRegistration />} />
        {displayCompetition && <Route path="competition" element={<ConcertoCompetition />} />}
        <Route path="dues" element={<Dues />} />
        {/* 
        
        <Route path="faq" element={<FAQ />} />
        <Route path="documents" element={<Documents />} />
         */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
