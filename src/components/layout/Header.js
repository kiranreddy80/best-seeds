import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
      { name: 'Brood Stock', path: '/brood-stock' },
      //  { name: 'Trending Updates', path: '/trending-updates' }, 
   
   
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">BS</div>
            <div className="logo-text">Best Seeds</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* User Actions */}
          <div className="header-actions">
           
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`menu-line ${isMobileMenuOpen ? 'line-1' : ''}`}></span>
              <span className={`menu-line ${isMobileMenuOpen ? 'line-2' : ''}`}></span>
              <span className={`menu-line ${isMobileMenuOpen ? 'line-3' : ''}`}></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
             
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;