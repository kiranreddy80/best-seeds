const Home = () => {
  const features = [
    {
      icon: "🛒",
      title: "Easy Online Booking",
      description: "Book seeds in 2 minutes with our simple mobile app"
    },
    {
      icon: "🚚",
      title: "Fast Vehicle Delivery",
      description: "Temperature-controlled vehicles deliver within 24 hours"
    },
    {
      icon: "📊",
      title: "Live Market Prices",
      description: "Real-time seed prices updated every hour"
    },
    {
      icon: "🌤️",
      title: "Smart Climate Alerts",
      description: "Weather forecasts and farming recommendations"
    },
    {
      icon: "💊",
      title: "Aqua Medicines",
      description: "Complete range of aquaculture medicines"
    },
    {
      icon: "👨‍🌾",
      title: "Expert Farming Support",
      description: "24/7 access to aquaculture experts"
    }
  ];

  const prices = [
    { city: "Karachi", product: "Shrimp Seeds", price: "$46.50", change: "+2.3%" },
    { city: "Lahore", product: "Fish Seeds", price: "$31.75", change: "-1.2%" },
    { city: "Islamabad", product: "Crop Seeds", price: "$29.25", change: "+3.1%" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="trust-badge">
                <span className="badge-dot"></span>
                🚀 Trusted by 500+ Farms
              </div>
              <h1 className="hero-title">
                Grow Your <span className="highlight">Aqua Business</span> With Premium Seeds
              </h1>
              <p className="hero-subtitle">
                Get the finest hatchery seeds with real-time pricing, climate-smart farming advice, 
                and doorstep delivery. Everything you need for successful aquaculture in one platform.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-large">
                  🛒 Order Seeds Now
                </button>
                <button className="btn btn-outline btn-large">
                  📞 Book Consultation
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Farmers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Expert Support</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="price-card">
                <div className="card-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="price-display">
                  <div className="price-label">Live Price Update</div>
                  <div className="price-value">Shrimp Seeds: $46.50/kg</div>
                  <div className="price-change positive">↑ 2.3% from yesterday</div>
                </div>
                <div className="mini-products">
                  <div className="mini-product">
                    <div className="mini-icon">🐟</div>
                    <div className="mini-name">Fish Seeds</div>
                    <div className="mini-price">$32.75</div>
                  </div>
                  <div className="mini-product">
                    <div className="mini-icon">🦐</div>
                    <div className="mini-name">Prawn Seeds</div>
                    <div className="mini-price">$52.30</div>
                  </div>
                </div>
                <button className="btn btn-primary btn-full">
                  📊 View All Prices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Everything You Need for <span className="highlight">Successful Aquaculture</span>
            </h2>
            <p className="section-subtitle">
              From seed selection to harvest management, we provide complete solutions 
              for modern aquaculture farmers.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section className="prices-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Live Market Prices</h2>
            <p className="section-subtitle">Real-time seed prices updated hourly across major cities</p>
          </div>
          <div className="prices-table">
            <div className="table-header">
              <div className="table-cell">City</div>
              <div className="table-cell">Product</div>
              <div className="table-cell">Price</div>
              <div className="table-cell">Change</div>
            </div>
            {prices.map((price, index) => (
              <div key={index} className="table-row">
                <div className="table-cell">{price.city}</div>
                <div className="table-cell">{price.product}</div>
                <div className="table-cell price-value">{price.price}</div>
                <div className={`table-cell change ${price.change.includes('+') ? 'positive' : 'negative'}`}>
                  {price.change}
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <button className="btn btn-primary">
              📱 Get Price Alerts on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;