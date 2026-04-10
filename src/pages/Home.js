import react from 'react';
import ClimateNews from "./ClimateNews"; 
import AquaFarming from "./AquaFarming";
import ContactUs from "./ContactUs";

import React from 'react';
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

 
  // Inline styles
  const styles = {
    homePage: {
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    
    // Hero Section
    heroSection: {
      background: 'linear-gradient(135deg, #0076BE 0%, #00a8ff 50%, #0076BE 100%)',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '60px',
      position: 'relative',
      zIndex: 2
    },
    heroText: {
      flex: 1
    },
    heroVisual: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    trustBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      padding: '8px 16px',
      borderRadius: '20px',
      marginBottom: '24px',
      fontWeight: '600',
      fontSize: '14px'
    },
    badgeDot: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      lineHeight: '1.2',
      marginBottom: '24px'
    },
    highlight: {
      color: '#fbbf24',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      opacity: 0.9,
      marginBottom: '32px',
      lineHeight: '1.6',
      maxWidth: '600px'
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      marginBottom: '40px',
      flexWrap: 'wrap'
    },
    btn: {
      padding: '12px 24px',
      borderRadius: '12px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    },
    btnPrimary: {
      background: 'white',
      color: '#0076BE'
    },
    btnOutline: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    btnLarge: {
      padding: '16px 32px',
      fontSize: '18px'
    },
    btnFull: {
      width: '100%',
      justifyContent: 'center'
    },
    heroStats: {
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '0.875rem',
      opacity: 0.8
    },
    priceCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%'
    },
    cardHeader: {
      marginBottom: '20px'
    },
    browserDots: {
      display: 'flex',
      gap: '8px'
    },
    browserDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%'
    },
    priceDisplay: {
      background: '#f8fafc',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '20px',
      borderLeft: '4px solid #10b981'
    },
    priceLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500'
    },
    priceValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#0076BE',
      margin: '4px 0'
    },
    priceChange: {
      fontSize: '0.875rem',
      fontWeight: '600'
    },
    positive: {
      color: '#10b981'
    },
    negative: {
      color: '#ef4444'
    },
    miniProducts: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '20px'
    },
    miniProduct: {
      background: '#f8fafc',
      padding: '16px',
      borderRadius: '12px',
      textAlign: 'center',
      transition: 'transform 0.2s'
    },
    miniIcon: {
      fontSize: '1.5rem',
      marginBottom: '8px'
    },
    miniName: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '4px'
    },
    miniPrice: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#0076BE'
    },

    // Features Section
    featuresSection: {
      padding: '80px 0',
      background: '#f8fafc'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '16px'
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px'
    },
    featureCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '20px'
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '12px'
    },
    featureDescription: {
      color: '#6b7280',
      lineHeight: '1.6'
    },

    // Prices Section
    pricesSection: {
      padding: '80px 0',
      background: 'white'
    },
    pricesTable: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      marginBottom: '40px'
    },
    tableHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      background: '#0076BE',
      color: 'white',
      fontWeight: '600',
      padding: '16px 24px'
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: '16px 24px',
      borderBottom: '1px solid #e5e7eb',
      transition: 'background-color 0.2s'
    },
    tableCell: {
      display: 'flex',
      alignItems: 'center'
    },
    sectionFooter: {
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.homePage}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <div style={styles.trustBadge}>
                <span style={styles.badgeDot}></span>
                🚀 Trusted by 500+ Farms
              </div>
              <h1 style={styles.heroTitle}>
                Grow Your <span style={styles.highlight}>Aqua Business</span> With Premium Seeds
              </h1>
              <p style={styles.heroSubtitle}>
                Get the finest hatchery seeds with real-time pricing, climate-smart farming advice, 
                and doorstep delivery. Everything you need for successful aquaculture in one platform.
              </p>
              <div style={styles.heroButtons}>
                <button 
                  style={{...styles.btn, ...styles.btnPrimary, ...styles.btnLarge}}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  🛒 Order Seeds Now
                </button>
                <button 
                  style={{...styles.btn, ...styles.btnOutline, ...styles.btnLarge}}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#0076BE';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📞 Book Consultation
                </button>
              </div>
              <div style={styles.heroStats}>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>500+</div>
                  <div style={styles.statLabel}>Happy Farmers</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>98%</div>
                  <div style={styles.statLabel}>Success Rate</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>24/7</div>
                  <div style={styles.statLabel}>Expert Support</div>
                </div>
              </div>
            </div>
            <div style={styles.heroVisual}>
              <div style={styles.priceCard}>
                <div style={styles.cardHeader}>
                  <div style={styles.browserDots}>
                    <span style={{...styles.browserDot, background: '#ef4444'}}></span>
                    <span style={{...styles.browserDot, background: '#f59e0b'}}></span>
                    <span style={{...styles.browserDot, background: '#10b981'}}></span>
                  </div>
                </div>
                
                <div style={styles.miniProducts}>
                  <div 
                    style={styles.miniProduct}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={styles.miniIcon}>🐟</div>
                    <div style={styles.miniName}>Fish Seeds</div>
                    <div style={styles.miniPrice}>3767.75</div>
                  </div>
                  <div 
                    style={styles.miniProduct}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={styles.miniIcon}>🦐</div>
                    <div style={styles.miniName}>Prawn Seeds</div>
                    <div style={styles.miniPrice}>5286.30</div>
                  </div>
                </div>
                <button 
                  style={{...styles.btn, ...styles.btnPrimary, ...styles.btnFull}}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.background = '#005a8f';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'white';
                    e.target.style.color = '#0076BE';
                  }}
                >
                  📊 View All Prices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Everything You Need for <span style={styles.highlight}>Successful Aquaculture</span>
            </h2>
            <p style={styles.sectionSubtitle}>
              From seed selection to harvest management, we provide complete solutions 
              for modern aquaculture farmers.
            </p>
          </div>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 <ClimateNews />
 <AquaFarming />

      {/* Contact Us Section */}
      <section style={{ padding: '60px 0', background: 'white' }} id="contact">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <p style={styles.sectionSubtitle}>Have questions? Reach out to us anytime.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { icon: '📞', label: 'Phone', value: '+1 (234) 567-890', color: '#0076BE' },
              { icon: '✉️', label: 'Email', value: 'info@bestseeds.com', color: '#10b981' },
              { icon: '📍', label: 'Address', value: 'Seed City, Farmland 12345', color: '#f59e0b' },
              { icon: '💬', label: 'WhatsApp', value: '+1 (234) 567-891', color: '#6366f1' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f8fafc', borderRadius: '12px', padding: '24px',
                textAlign: 'center', transition: 'transform 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: item.color }}>{item.value}</div>
              </div>
            ))}
          </div>
          <ContactUs />
        </div>
      </section>

      {/* Terms & Privacy Section */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }} id="terms">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Terms & Privacy</h2>
            <p style={styles.sectionSubtitle}>Transparency and trust are at the core of everything we do.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Terms & Conditions */}
            <div style={{
              background: 'white', borderRadius: '16px', padding: '36px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: '#e0f2fe', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.2rem'
                }}>📋</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', margin: 0 }}>Terms & Conditions</h3>
              </div>
              {[
                { title: 'Acceptance', text: 'By using Best Seeds, you agree to be bound by these terms of service.' },
                { title: 'Orders', text: 'All orders are subject to availability and price confirmation at checkout.' },
                { title: 'Delivery', text: 'Temperature-controlled delivery within 24 hours for local orders.' },
                { title: 'Pricing', text: 'Real-time market rates, locked at the time of order confirmation.' },
                { title: 'Returns', text: 'Transit damage claims accepted within 24 hours with photo evidence.' },
                { title: 'Quality', text: '98% survival rate guaranteed when handling guidelines are followed.' }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '14px 0',
                  borderBottom: i < 5 ? '1px solid #f1f5f9' : 'none'
                }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1f2937', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.835rem', color: '#6b7280', lineHeight: 1.6 }}>{item.text}</div>
                </div>
              ))}
            </div>

            {/* Privacy Policy */}
            <div style={{
              background: 'white', borderRadius: '16px', padding: '36px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: '#d1fae5', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.2rem'
                }}>🔒</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', margin: 0 }}>Privacy Policy</h3>
              </div>
              {[
                { title: 'Data Collection', text: 'We collect name, email, phone, and order details to serve you.' },
                { title: 'Usage', text: 'Your data powers order processing, delivery updates, and farming advice.' },
                { title: 'Protection', text: 'SSL/TLS encryption with strict access controls and regular audits.' },
                { title: 'Sharing', text: 'Shared only with delivery and payment partners. Never sold to third parties.' },
                { title: 'Your Rights', text: 'Access, update, or delete your data anytime through your account.' },
                { title: 'Cookies', text: 'Essential and analytics cookies used. Manage via browser settings.' }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '14px 0',
                  borderBottom: i < 5 ? '1px solid #f1f5f9' : 'none'
                }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1f2937', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.835rem', color: '#6b7280', lineHeight: 1.6 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', marginTop: '28px' }}>
            Last updated: April 2026. By continuing to use our platform, you agree to these policies.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;