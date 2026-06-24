import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Bhimashankar from './pages/Bhimashankar';
import SahyadriRanges from './pages/SahyadriRanges';
import SidhagadFort from './pages/SidhagadFort';
import Waterfalls from './pages/Waterfalls';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bhimashankar" element={<Bhimashankar />} />
          <Route path="/sahyadri" element={<SahyadriRanges />} />
          <Route path="/sidhagad" element={<SidhagadFort />} />
          <Route path="/waterfalls" element={<Waterfalls />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;