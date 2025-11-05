import React, { useState } from 'react';

const PriceSection = () => {
  const [selectedCity, setSelectedCity] = useState('All');
  
  const cities = ['All', 'Karachi', 'Lahore', 'Islamabad', 'Multan', 'Faisalabad'];
  
  const prices = [
    { 
      id: 1, 
      city: "Karachi", 
      product: "Premium Shrimp Seeds", 
      price: "$46.50/kg", 
      change: "+2.3%", 
      trend: "up",
      availability: "In Stock",
      delivery: "24h"
    },
    { 
      id: 2, 
      city: "Lahore", 
      product: "Organic Fish Seeds", 
      price: "$31.75/kg", 
      change: "-1.2%", 
      trend: "down",
      availability: "In Stock",
      delivery: "24hhh"
    },
    { 
      id: 3, 
      city: "Islamabad", 
      product: "Hybrid Crop Seeds", 
      price: "$29.25/kg", 
      change: "+3.1%", 
      trend: "up",
      availability: "Low Stock",
      delivery: "48h"
    },
    { 
      id: 4, 
      city: "Multan", 
      product: "Fresh Prawn Seeds", 
      price: "$52.30/kg", 
      change: "+5.4%", 
      trend: "up",
      availability: "In Stock",
      delivery: "24h"
    },
    { 
      id: 5, 
      city: "Faisalabad", 
      product: "Carp Fish Seeds", 
      price: "$28.90/kg", 
      change: "+0.8%", 
      trend: "up",
      availability: "In Stock",
      delivery: "24h"
    },
    { 
      id: 6, 
      city: "Karachi", 
      product: "Tilapia Seeds", 
      price: "$34.20/kg", 
      change: "-0.5%", 
      trend: "down",
      availability: "Out of Stock",
      delivery: "72h"
    }
  ];

  const filteredPrices = selectedCity === 'All' 
    ? prices 
    : prices.filter(price => price.city === selectedCity);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Live Market Prices
          </h2>
          <p className="text-xl text-gray-600">
            Real-time seed prices updated hourly across major cities
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCity === city
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Prices Table */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredPrices.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{item.product}</h3>
                    <p className="text-gray-500 text-sm">{item.city}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.availability === 'In Stock' 
                      ? 'bg-green-100 text-green-800'
                      : item.availability === 'Low Stock'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.availability}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <span className={`flex items-center text-sm font-semibold ${
                    item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.trend === 'up' ? '↗' : '↘'} {item.change}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>🚚 {item.delivery} delivery</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Update Time */}
          <div className="bg-primary text-white text-center py-3">
            <p className="text-sm">🕒 Last updated: Today at 2:30 PM | Prices refresh every hour</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            📱 Get Price Alerts on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;