import React, { useState } from 'react';

const TrendingUpdates = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data for trending updates with aquaculture-related images
  const trendingUpdates = [
    {
      id: 1,
      type: 'news',
      category: 'Technology',
      title: 'New AI-Powered Hatchery Management System Launched',
      excerpt: 'Revolutionary AI system helps hatcheries optimize breeding conditions and increase yield by 40%...',
      image: '🔬',
      date: '2024-01-15',
      readTime: '3 min read',
      trending: true,
      tags: ['AI', 'Technology', 'Innovation']
    },
    {
      id: 2,
      type: 'ad',
      category: 'Product Launch',
      title: 'Premium Tilapia Brood Stock Available Now',
      excerpt: 'Genetically superior Tilapia brood stock with disease resistance. Limited stock available...',
      image: '🐟',
      date: '2024-01-14',
      readTime: '2 min read',
      featured: true,
      tags: ['Tilapia', 'Brood Stock', 'Premium']
    },
    {
      id: 3,
      type: 'news',
      category: 'Research',
      title: 'Breakthrough in Shrimp Disease Resistance',
      excerpt: 'Scientists develop new breeding technique to enhance shrimp immunity against common diseases...',
      image: '🦐',
      date: '2024-01-13',
      readTime: '4 min read',
      trending: true,
      tags: ['Research', 'Shrimp', 'Disease Resistance']
    },
    {
      id: 4,
      type: 'ad',
      category: 'Equipment',
      title: 'Advanced Water Quality Monitoring Systems',
      excerpt: 'Real-time water quality sensors with mobile app integration. Special discount for early adopters...',
      image: '📊',
      date: '2024-01-12',
      readTime: '2 min read',
      tags: ['Equipment', 'Technology', 'Monitoring']
    },
    {
      id: 5,
      type: 'news',
      category: 'Market Update',
      title: 'Seed Prices Expected to Rise 15% Next Quarter',
      excerpt: 'Industry experts predict price increase due to high demand and seasonal factors...',
      image: '📈',
      date: '2024-01-11',
      readTime: '3 min read',
      trending: true,
      tags: ['Market', 'Prices', 'Forecast']
    },
    {
      id: 6,
      type: 'ad',
      category: 'Training',
      title: 'Advanced Hatchery Management Workshop',
      excerpt: '3-day intensive workshop on modern hatchery techniques. Limited seats available...',
      image: '🎓',
      date: '2024-01-10',
      readTime: '1 min read',
      tags: ['Training', 'Workshop', 'Education']
    },
    {
      id: 7,
      type: 'news',
      category: 'Innovation',
      title: 'Solar-Powered Hatchery Systems Gain Popularity',
      excerpt: 'Eco-friendly hatcheries reduce operational costs by 60% with solar integration...',
      image: '☀️',
      date: '2024-01-09',
      readTime: '3 min read',
      tags: ['Solar', 'Eco-friendly', 'Innovation']
    },
    {
      id: 8,
      type: 'ad',
      category: 'Seeds',
      title: 'New Fast-Growing Carp Varieties Available',
      excerpt: 'Genetically improved carp seeds with 30% faster growth rate. Order now for next season...',
      image: '🐠',
      date: '2024-01-08',
      readTime: '2 min read',
      featured: true,
      tags: ['Carp', 'Seeds', 'Fast Growth']
    },
    {
      id: 9,
      type: 'news',
      category: 'Policy',
      title: 'Government Announces Subsidy for Modern Hatcheries',
      excerpt: 'New scheme provides 50% subsidy for hatcheries adopting advanced technologies...',
      image: '🏛️',
      date: '2024-01-07',
      readTime: '4 min read',
      trending: true,
      tags: ['Policy', 'Subsidy', 'Government']
    },
    {
      id: 10,
      type: 'ad',
      category: 'Medicine',
      title: 'New Organic Fish Health Supplements',
      excerpt: 'Chemical-free health supplements improve immunity and growth in aquaculture...',
      image: '💊',
      date: '2024-01-06',
      readTime: '2 min read',
      tags: ['Medicine', 'Organic', 'Health']
    }
  ];

  // Featured ads for sidebar
  const featuredAds = [
    {
      id: 1,
      title: 'Premium Hatchery Equipment Sale',
      description: 'Upgrade your hatchery with latest equipment. 20% discount this month.',
      image: '⚙️',
      cta: 'Shop Now'
    },
    {
      id: 2,
      title: 'Expert Hatchery Consultation',
      description: 'Get personalized consultation for your hatchery setup and management.',
      image: '👨‍🌾',
      cta: 'Book Now'
    },
    {
      id: 3,
      title: 'Seed Quality Testing Kit',
      description: 'Ensure seed quality with our advanced testing kits. Easy to use, accurate results.',
      image: '🧪',
      cta: 'Learn More'
    }
  ];

  // Filter updates based on active tab
  const filteredUpdates = trendingUpdates.filter(update => {
    if (activeTab === 'all') return true;
    if (activeTab === 'news') return update.type === 'news';
    if (activeTab === 'ads') return update.type === 'ad';
    if (activeTab === 'trending') return update.trending;
    return true;
  });

  // Inline styles
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '32px 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      gap: '32px'
    },
    mainContent: {
      flex: '1'
    },
    sidebar: {
      width: '350px',
      flexShrink: 0
    },
    pageHeader: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    pageTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px'
    },
    pageDescription: {
      fontSize: '18px',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto'
    },
    tabs: {
      display: 'flex',
      gap: '8px',
      marginBottom: '32px',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '16px'
    },
    tab: {
      padding: '8px 16px',
      borderRadius: '20px',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#6b7280',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    },
    activeTab: {
      backgroundColor: '#0076BE',
      color: 'white'
    },
    updatesGrid: {
      display: 'grid',
      gap: '24px'
    },
    updateCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s ease'
    },
    featuredCard: {
      border: '2px solid #0076BE',
      boxShadow: '0 4px 6px -1px rgba(0, 118, 190, 0.2)'
    },
    updateImage: {
      height: '200px',
      backgroundColor: '#0076BE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '48px',
      background: 'linear-gradient(135deg, #0076BE, #1e40af)'
    },
    updateContent: {
      padding: '20px'
    },
    updateHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '12px'
    },
    updateType: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    newsType: {
      backgroundColor: '#dbeafe',
      color: '#1e40af'
    },
    adType: {
      backgroundColor: '#f0fdf4',
      color: '#166534'
    },
    trendingBadge: {
      backgroundColor: '#fef3c7',
      color: '#92400e',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '600'
    },
    updateTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '8px',
      lineHeight: '1.4'
    },
    updateExcerpt: {
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: '16px'
    },
    updateMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    },
    updateDate: {
      color: '#9ca3af',
      fontSize: '14px'
    },
    readTime: {
      color: '#6b7280',
      fontSize: '14px'
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    tag: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px'
    },
    sidebarSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '20px',
      marginBottom: '24px'
    },
    sidebarTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '16px',
      paddingBottom: '12px',
      borderBottom: '2px solid #0076BE'
    },
    featuredAd: {
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '16px',
      marginBottom: '16px',
      transition: 'box-shadow 0.2s ease'
    },
    adImage: {
      height: '120px',
      backgroundColor: '#0076BE',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '36px',
      marginBottom: '12px',
      background: 'linear-gradient(135deg, #0076BE, #1e40af)'
    },
    adTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '8px'
    },
    adDescription: {
      color: '#6b7280',
      fontSize: '14px',
      lineHeight: '1.5',
      marginBottom: '12px'
    },
    adCta: {
      backgroundColor: '#0076BE',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      width: '100%'
    },
    newsletter: {
      backgroundColor: '#0076BE',
      color: 'white',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center'
    },
    newsletterTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '8px'
    },
    newsletterText: {
      fontSize: '14px',
      marginBottom: '16px',
      opacity: 0.9
    },
    newsletterInput: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '6px',
      marginBottom: '12px',
      fontSize: '14px'
    },
    newsletterButton: {
      backgroundColor: 'white',
      color: '#0076BE',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Page Header */}
          <div style={styles.pageHeader}>
            <h1 style={styles.pageTitle}>Trending Updates</h1>
            <p style={styles.pageDescription}>
              Stay updated with the latest news, innovations, and advertisements in the hatchery and seeds industry
            </p>
          </div>

          {/* Tabs */}
          <div style={styles.tabs}>
            <button 
              style={{...styles.tab, ...(activeTab === 'all' && styles.activeTab)}}
              onClick={() => setActiveTab('all')}
            >
              All Updates
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'news' && styles.activeTab)}}
              onClick={() => setActiveTab('news')}
            >
              News
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'ads' && styles.activeTab)}}
              onClick={() => setActiveTab('ads')}
            >
              Ads & Promotions
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'trending' && styles.activeTab)}}
              onClick={() => setActiveTab('trending')}
            >
              Trending
            </button>
          </div>

          {/* Updates Grid */}
          <div style={styles.updatesGrid}>
            {filteredUpdates.map((update) => (
              <div 
                key={update.id} 
                style={{
                  ...styles.updateCard,
                  ...(update.featured && styles.featuredCard)
                }}
              >
                {/* Update Image */}
                <div style={styles.updateImage}>
                  {update.image}
                </div>
                
                {/* Update Content */}
                <div style={styles.updateContent}>
                  <div style={styles.updateHeader}>
                    <span style={{
                      ...styles.updateType,
                      ...(update.type === 'news' ? styles.newsType : styles.adType)
                    }}>
                      {update.type === 'news' ? 'News' : 'Advertisement'}
                    </span>
                    {update.trending && (
                      <span style={styles.trendingBadge}>
                        🔥 Trending
                      </span>
                    )}
                  </div>
                  
                  <h3 style={styles.updateTitle}>{update.title}</h3>
                  <p style={styles.updateExcerpt}>{update.excerpt}</p>
                  
                  <div style={styles.updateMeta}>
                    <span style={styles.updateDate}>{update.date}</span>
                    <span style={styles.readTime}>{update.readTime}</span>
                  </div>
                  
                  <div style={styles.tags}>
                    {update.tags.map((tag, index) => (
                      <span key={index} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          {/* Featured Ads */}
          <div style={styles.sidebarSection}>
            <h3 style={styles.sidebarTitle}>Featured Ads</h3>
            {featuredAds.map((ad) => (
              <div key={ad.id} style={styles.featuredAd}>
                <div style={styles.adImage}>
                  {ad.image}
                </div>
                <h4 style={styles.adTitle}>{ad.title}</h4>
                <p style={styles.adDescription}>{ad.description}</p>
                <button style={styles.adCta}>
                  {ad.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={styles.newsletter}>
            <h3 style={styles.newsletterTitle}>Stay Updated</h3>
            <p style={styles.newsletterText}>
              Get the latest trends and updates delivered to your inbox
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.newsletterInput}
            />
            <button style={styles.newsletterButton}>
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingUpdates;