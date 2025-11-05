import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Climate News', path: '/climate-news' },
    { name: 'Medicines', path: '/medicines' },
    { name: 'Aqua Farming', path: '/aqua-farming' },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="text-gray-700 hover:text-primary font-medium transition duration-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;