import React from 'react';

const FeatureGrid = () => {
  const features = [
    {
      icon: "🛒",
      title: "Easy Online Booking",
      description: "Book seeds in 2 minutes with our simple mobile app. Get instant confirmation and tracking.",
      stats: "500+ daily orders"
    },
    {
      icon: "🚚",
      title: "Fast Vehicle Delivery",
      description: "Temperature-controlled vehicles deliver fresh seeds directly to your farm within 24 hours.",
      stats: "98% on-time delivery"
    },
    {
      icon: "📊",
      title: "Live Market Prices",
      description: "Real-time seed prices updated every hour. Compare prices across different cities.",
      stats: "15+ cities covered"
    },
    {
      icon: "🌤️",
      title: "Smart Climate Alerts",
      description: "Get weather forecasts and farming recommendations based on local climate conditions.",
      stats: "AI-powered insights"
    },
    {
      icon: "💊",
      title: "Aqua Medicines",
      description: "Complete range of aquaculture medicines, supplements, and health management products.",
      stats: "50+ products"
    },
    {
      icon: "👨‍🌾",
      title: "Expert Farming Support",
      description: "24/7 access to aquaculture experts for guidance on farming techniques and problem-solving.",
      stats: "15+ years experience"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Everything You Need for 
            <span className="text-primary"> Successful Aquaculture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From seed selection to harvest management, we provide complete solutions 
            for modern aquaculture farmers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full inline-block">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;