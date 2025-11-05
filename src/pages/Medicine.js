import React from 'react';

const Medicines = () => {
  const medicines = [
    {
      id: 1,
      name: "Aqua Health Plus",
      price: "$15.99",
      description: "General health supplement for aquatic species",
      category: "Supplement",
      image: "💊",
      benefits: ["Boosts immunity", "Improves growth", "Enhances color"]
    },
    {
      id: 2,
      name: "Anti-Fungal Treatment",
      price: "$22.50",
      description: "Effective against common fungal infections",
      category: "Treatment",
      image: "🦠",
      benefits: ["Fast acting", "Safe for fish", "Easy to use"]
    },
    {
      id: 3,
      name: "Water Purifier Pro",
      price: "$18.75",
      description: "Maintains optimal water quality parameters",
      category: "Maintenance",
      image: "💧",
      benefits: ["Clears water", "Reduces toxins", "Balances pH"]
    },
    {
      id: 4,
      name: "Growth Booster Max",
      price: "$29.99",
      description: "Enhances growth and development rates",
      category: "Supplement",
      image: "📈",
      benefits: ["30% faster growth", "Better feed conversion", "Healthy development"]
    },
    {
      id: 5,
      name: "Parasite Guard",
      price: "$25.50",
      description: "Protects against common parasites",
      category: "Prevention",
      image: "🛡️",
      benefits: ["Preventive care", "Safe for all species", "Long lasting"]
    },
    {
      id: 6,
      name: "Oxygen Boost",
      price: "$12.99",
      description: "Increases oxygen levels in water",
      category: "Emergency",
      image: "🌊",
      benefits: ["Instant action", "Emergency use", "All natural"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Aquaculture Medicines & Supplements</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality medicines and supplements to keep your aquatic life healthy and thriving
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input 
              type="text" 
              placeholder="🔍 Search medicines..." 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Categories</option>
              <option>Supplement</option>
              <option>Treatment</option>
              <option>Prevention</option>
              <option>Maintenance</option>
              <option>Emergency</option>
            </select>
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-300 w-full md:w-auto">
              Search Products
            </button>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{medicine.image}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    medicine.category === 'Supplement' ? 'bg-green-100 text-green-800' :
                    medicine.category === 'Treatment' ? 'bg-red-100 text-red-800' :
                    medicine.category === 'Prevention' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {medicine.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{medicine.name}</h3>
                <p className="text-gray-600 mb-4">{medicine.description}</p>
                
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {medicine.benefits.map((benefit, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Price and Action */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{medicine.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Support Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-yellow-800 mb-2">🚨 Emergency Veterinary Support</h2>
              <p className="text-yellow-700">
                24/7 expert support for urgent aquaculture health issues
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center">
                <p className="font-semibold text-yellow-800">📞 Emergency Hotline</p>
                <p className="text-lg font-bold">+1 (555) 123-HELP</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-yellow-800">✉️ Email Support</p>
                <p className="text-lg font-bold">emergency@bestseeds.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicines;