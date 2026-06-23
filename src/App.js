/* =============================================
   UPDATED APP.JS WITH ALL ROUTES
   Place this in: src/App.js
   ============================================= */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bhimashankar from './pages/Bhimashankar';
import SahyadriRanges from './pages/SahyadriRanges';
import SidhagadFort from './pages/SidhagadFort';
import Waterfalls from './pages/Waterfalls';



function App() {
  return (
    <Router>
      <div className="App">
        {/* Header on all pages */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bhimashankar" element={<Bhimashankar />} />
          <Route path="/sahyadri" element={<SahyadriRanges />} />
          <Route path="/sidhagad" element={<SidhagadFort />} />
          <Route path="/waterfalls" element={<Waterfalls />} />
        </Routes>

        {/* Footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;