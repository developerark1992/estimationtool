// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';          // Ensure this path and case are correct
import StepOne from './components/stepone';    // Ensure the correct path and case
import StepTwo from './components/steptwo';    // Ensure the correct path and case
import StepThree from './components/stepthree';
import StepFour from './components/stepfour';
import StepFive from './components/stepfive';
import Summary from './components/summary';
import Header from './components/header';      // Ensure the correct path and case

function App() {
  return (
    <Router>
      {/* Place Header component here to ensure it appears on all pages */}
      <Header />

      <Routes>
        {/* Define routes with correct paths and components */}
        <Route path="/" element={<Home />} />
        <Route path="/stepone" element={<StepOne />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/stepthree" element={<StepThree />} />
        <Route path="/stepfour" element={<StepFour />} />
        <Route path="/stepfive" element={<StepFive />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;