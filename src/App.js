import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import BroodStock from './pages/BroodStock';
import TrendingUpdates from './pages/TrendingUpdates'; // ADD THIS IMPORT

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/brood-stock" element={<BroodStock />} />
            <Route path="/trending-updates" element={<TrendingUpdates />} /> {/* ADD THIS ROUTE */}
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;