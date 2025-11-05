import React from 'react';

const ClimateNews = () => {
  const news = [
    {
      id: 1,
      title: "Optimal Weather Conditions for Shrimp Farming",
      summary: "Perfect temperature and humidity levels expected this week, creating ideal conditions for shrimp seed planting and growth.",
      date: "2024-01-15",
      category: "Weather Alert",
      image: "🌤️"
    },
    {
      id: 2,
      title: "New Disease-Resistant Seed Varieties Launched",
      summary: "Introducing advanced seed varieties with enhanced resistance to common aquaculture diseases, promising higher yields.",
      date: "2024-01-14",
      category: "Innovation",
      image: "🔬"
    },
    {
      id: 3,
      title: "Sustainable Farming Practices Workshop",
      summary: "Join our free online workshop on sustainable aquaculture practices and modern farming techniques for better productivity.",
      date: "2024-01-12",
      category: "Education",
      image: "👨‍🌾"
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Climate & Farming News</h1>
          <p className="page-subtitle">
            Stay updated with the latest weather conditions, farming insights, and market trends
          </p>
        </div>

        {/* Weather Widget */}
        <div className="weather-widget">
          <h2 className="widget-title">🌤️ Current Weather Conditions</h2>
          <div className="weather-grid">
            <div className="weather-card">
              <div className="weather-icon">🌡️</div>
              <div className="weather-info">
                <div className="weather-label">Temperature</div>
                <div className="weather-value">26°C</div>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-icon">💧</div>
              <div className="weather-info">
                <div className="weather-label">Humidity</div>
                <div className="weather-value">65%</div>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-icon">💨</div>
              <div className="weather-info">
                <div className="weather-label">Wind Speed</div>
                <div className="weather-value">12 km/h</div>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-icon">📊</div>
              <div className="weather-info">
                <div className="weather-label">Farming Outlook</div>
                <div className="weather-value positive">Excellent</div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-header">
                <span className="news-category">{item.category}</span>
                <div className="news-icon">{item.image}</div>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-summary">{item.summary}</p>
              <div className="news-footer">
                <span className="news-date">{item.date}</span>
                <button className="news-read-more">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h2 className="newsletter-title">📧 Stay Updated</h2>
          <p className="newsletter-subtitle">Get daily climate updates and farming tips delivered to your inbox</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateNews;