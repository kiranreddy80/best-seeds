import React from 'react';

const AquaFarming = () => {
  const styles = {
    container: {
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      color: '#1f2937',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 24px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    headerIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80px',
      height: '80px',
      backgroundColor: '#0076BE',
      borderRadius: '50%',
      marginBottom: '24px',
      boxShadow: '0 10px 25px rgba(0, 118, 190, 0.3)'
    },
    headerIconText: {
      fontSize: '32px',
      color: 'white'
    },
    mainTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #0076BE 0%, #00A4E8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '16px'
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '1.125rem',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    introCard: {
      backgroundColor: 'white',
      borderRadius: '24px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      padding: '48px',
      marginBottom: '64px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    introGradientBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: 'linear-gradient(90deg, #0076BE 0%, #00C6FF 100%)'
    },
    introTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#0076BE',
      marginBottom: '24px'
    },
    introText: {
      color: '#6b7280',
      marginBottom: '32px',
      lineHeight: '1.7',
      fontSize: '1.125rem',
      maxWidth: '800px',
      margin: '0 auto 32px'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #0076BE 0%, #00A4E8 100%)',
      color: 'white',
      fontWeight: '600',
      padding: '12px 32px',
      borderRadius: '12px',
      border: 'none',
      boxShadow: '0 10px 20px rgba(0, 118, 190, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1rem'
    },
    secondaryButton: {
      background: 'transparent',
      color: '#0076BE',
      fontWeight: '600',
      padding: '12px 32px',
      borderRadius: '12px',
      border: '2px solid #0076BE',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#0076BE',
      marginBottom: '48px',
      textAlign: 'center',
      position: 'relative'
    },
    sectionUnderline: {
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '3px',
      background: 'linear-gradient(90deg, #0076BE 0%, #00C6FF 100%)'
    },
    tipsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
      marginBottom: '80px'
    },
    tipCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      border: '1px solid #f3f4f6',
      transition: 'all 0.3s ease'
    },
    tipHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    tipIcon: {
      fontSize: '32px',
      padding: '12px',
      backgroundColor: '#eff6ff',
      borderRadius: '12px'
    },
    tipTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#0076BE'
    },
    tipDescription: {
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    tag: {
      fontSize: '0.875rem',
      background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
      color: '#0076BE',
      padding: '6px 12px',
      borderRadius: '8px',
      border: '1px solid #dbeafe',
      fontWeight: '500'
    },
    storiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '80px'
    },
    storyCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      border: '1px solid #f3f4f6',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    storyStar: {
      position: 'absolute',
      top: '-16px',
      left: '-16px',
      width: '48px',
      height: '48px',
      backgroundColor: '#fbbf24',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    storyText: {
      fontStyle: 'italic',
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6',
      fontSize: '1.125rem'
    },
    storyFooter: {
      borderTop: '1px solid #e5e7eb',
      paddingTop: '16px'
    },
    storyName: {
      fontWeight: 'bold',
      color: '#0076BE',
      fontSize: '1.125rem',
      marginBottom: '4px'
    },
    storyAchievement: {
      backgroundColor: '#dcfce7',
      color: '#166534',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600'
    },
    supportSection: {
      background: 'linear-gradient(135deg, #0076BE 0%, #00A4E8 100%)',
      borderRadius: '24px',
      padding: '48px',
      textAlign: 'center',
      color: 'white',
      boxShadow: '0 20px 25px -5px rgba(0, 118, 190, 0.3)',
      marginBottom: '64px'
    },
    supportTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    supportSubtitle: {
      color: '#bfdbfe',
      marginBottom: '40px',
      fontSize: '1.125rem'
    },
    supportGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px'
    },
    supportCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    },
    supportIcon: {
      fontSize: '48px',
      marginBottom: '16px',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
    },
    supportMethod: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      marginBottom: '8px'
    },
    supportDetail: {
      color: '#bfdbfe',
      fontWeight: '500'
    },
    footerCTA: {
      textAlign: 'center',
      marginTop: '64px'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      fontWeight: 'bold',
      padding: '16px 48px',
      borderRadius: '16px',
      border: 'none',
      boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.125rem'
    }
  };

  // Add hover effects
  const addHover = (baseStyle) => ({
    ...baseStyle,
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }
  });

  const tips = [
    {
      title: "Water Quality Management",
      description: "Maintain optimal pH levels (6.5–8.5) and monitor water temperature regularly for healthy aquatic life.",
      icon: "💧",
      details: ["pH monitoring", "Temperature control", "Oxygen levels", "Ammonia testing"]
    },
    {
      title: "Feeding Techniques",
      description: "Learn proper feeding schedules and quantities to maximize growth and minimize waste.",
      icon: "🍽️",
      details: ["Scheduled feeding", "Proper quantities", "Nutrition balance", "Waste management"]
    },
    {
      title: "Disease Prevention",
      description: "Implement preventive measures and early detection systems for common aquaculture diseases.",
      icon: "🩺",
      details: ["Regular checkups", "Vaccination", "Quarantine procedures", "Health monitoring"]
    },
    {
      title: "Harvesting Best Practices",
      description: "Optimal timing and techniques for harvesting to ensure quality and sustainability.",
      icon: "🎣",
      details: ["Right timing", "Proper techniques", "Quality control", "Post-harvest care"]
    }
  ];

  const successStories = [
    {
      name: "Ali Farm, Karachi",
      story: "Best Seeds helped us increase our shrimp yield by 40% with their premium seeds and expert guidance.",
      achievement: "40% Yield Increase",
      duration: "6 months"
    },
    {
      name: "Green Aqua, Lahore",
      story: "The daily price updates and climate news have been game-changers for our farming decisions.",
      achievement: "Better Decision Making",
      duration: "1 year"
    },
    {
      name: "Blue Waters, Islamabad",
      story: "24/7 expert support saved our stock during disease outbreak. Highly recommended!",
      achievement: "Disease Prevention",
      duration: "8 months"
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerIcon}>
            <span style={styles.headerIconText}>🐟</span>
          </div>
          <h1 style={styles.mainTitle}>Aqua Farming Guidance</h1>
          <p style={styles.subtitle}>
            Complete aquaculture solutions from seed selection to harvest management
          </p>
        </div>

        {/* Introduction */}
        <div style={styles.introCard}>
          <div style={styles.introGradientBar}></div>
          <h2 style={styles.introTitle}>Your Complete Aquaculture Partner</h2>
          <p style={styles.introText}>
            From seed selection to harvest, Best Seeds provides comprehensive guidance for successful aquaculture operations.
            Our team of experts with 15+ years of experience is here to support your farming journey every step of the way.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 30px rgba(0, 118, 190, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 118, 190, 0.3)';
              }}
            >
              <span>👨‍🌾</span>
              Book Expert Consultation
            </button>
            <button 
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = '#0076BE';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#0076BE';
              }}
            >
              <span>📞</span>
              Call Farming Expert
            </button>
          </div>
        </div>

        {/* Farming Tips */}
        <div>
          <h2 style={styles.sectionTitle}>
            Essential Farming Tips
            <div style={styles.sectionUnderline}></div>
          </h2>
          <div style={styles.tipsGrid}>
            {tips.map((tip, i) => (
              <div 
                key={i} 
                style={styles.tipCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={styles.tipHeader}>
                  <div style={styles.tipIcon}>{tip.icon}</div>
                  <h3 style={styles.tipTitle}>{tip.title}</h3>
                </div>
                <p style={styles.tipDescription}>{tip.description}</p>
                <div style={styles.tagsContainer}>
                  {tip.details.map((detail, idx) => (
                    <span key={idx} style={styles.tag}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <h2 style={styles.sectionTitle}>
            🌟 Success Stories
            <div style={{...styles.sectionUnderline, background: 'linear-gradient(90deg, #f59e0b 0%, #f97316 100%)'}}></div>
          </h2>
          <div style={styles.storiesGrid}>
            {successStories.map((story, index) => (
              <div 
                key={index} 
                style={styles.storyCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={styles.storyStar}>⭐</div>
                <p style={styles.storyText}>"{story.story}"</p>
                <div style={styles.storyFooter}>
                  <div style={styles.storyName}>{story.name}</div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <span style={styles.storyAchievement}>{story.achievement}</span>
                    <span style={{color: '#6b7280', fontWeight: '500'}}>{story.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div style={styles.footerCTA}>
          <p style={{color: '#6b7280', marginBottom: '24px', fontSize: '1.125rem'}}>
            Ready to transform your aquaculture business?
          </p>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 30px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 20px rgba(16, 185, 129, 0.3)';
            }}
          >
            Get Started Today 🚀
          </button>
        </div>

      </div>
    </div>
  );
};

export default AquaFarming;