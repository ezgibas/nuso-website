import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import Auditions from './pages/Auditions';
import {About, AboutVideo} from './pages/About'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auditions" element={<Auditions />} />
        {/* TODO CREATE ALL THESE PAGES */}
        <Route path="about" element={<About />} />
        <Route path="about/video" element={<AboutVideo />} />
        {/* 
        <Route path="registration" element={<CourseRegistration />} />
        <Route path="dues" element={<Dues />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="documents" element={<Documents />} />
        <Route path="competition" element={<ConcertoCompetition />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
