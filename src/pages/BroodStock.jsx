import React, { useState } from 'react';

const BroodStock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for hatcheries
  const hatcheries = [
    {
      id: 1,
      name: 'Blue Wave Hatcheries',
      location: 'Chennai, Tamil Nadu',
      availablePieces: 1500,
      image: '/images/hatchery1.jpg',
      rating: 4.8,
      species: ['Tilapia', 'Rohu']
    },
    {
      id: 2,
      name: 'Aqua Prime Breeders',
      location: 'Visakhapatnam, Andhra Pradesh',
      availablePieces: 800,
      image: '/images/hatchery2.jpg',
      rating: 4.6,
      species: ['Shrimp', 'Crab']
    },
    {
      id: 3,
      name: 'Marine Gold Hatcheries',
      location: 'Kochi, Kerala',
      availablePieces: 1200,
      image: '/images/hatchery3.jpg',
      rating: 4.9,
      species: ['Pearl Spot', 'Mullet']
    },
    // ... (include all 15 hatcheries from your previous code)
    {
      id: 15,
      name: 'Rajasthan Inland Fisheries',
      location: 'Rajasthan',
      availablePieces: 1300,
      image: '/images/hatchery15.jpg',
      rating: 4.4,
      species: ['Catfish', 'Tilapia']
    }
  ];

  // Mock data for seed prices
  const seedPrices = [
    { species: 'Tilapia Fingerlings', price: '₹1,200', trend: 'up', change: '+5%' },
    { species: 'Shrimp Post Larvae', price: '₹2,500', trend: 'down', change: '-3%' },
    { species: 'Rohu Fingerlings', price: '₹900', trend: 'stable', change: '0%' },
    { species: 'Catla Fingerlings', price: '₹950', trend: 'up', change: '+2%' },
    { species: 'Mrigal Fingerlings', price: '₹850', trend: 'up', change: '+4%' },
    { species: 'Pearl Spot Fingerlings', price: '₹1,800', trend: 'stable', change: '0%' },
    { species: 'Carp Mixed', price: '₹800', trend: 'down', change: '-2%' },
    { species: 'Freshwater Prawn', price: '₹3,200', trend: 'up', change: '+7%' }
  ];

  const filteredHatcheries = hatcheries.filter(hatchery =>
    hatchery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hatchery.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hatchery.species.some(species => species.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
      padding: '0 16px'
    },
    pageHeader: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    pageTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px'
    },
    pageDescription: {
      fontSize: '18px',
      color: '#6b7280',
      maxWidth: '672px',
      margin: '0 auto'
    },
    searchContainer: {
      maxWidth: '672px',
      margin: '0 auto 48px'
    },
    searchInput: {
      width: '100%',
      padding: '16px 24px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      fontSize: '18px'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '24px'
    },
    hatcheriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '24px',
      marginBottom: '64px'
    },
    hatcheryCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      transition: 'box-shadow 0.3s ease'
    },
    hatcheryImage: {
      height: '192px',
      background: 'linear-gradient(135deg, #0076BE, #1e40af)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    hatcheryContent: {
      padding: '24px'
    },
    hatcheryHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    hatcheryName: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f0fdf4',
      padding: '4px 8px',
      borderRadius: '4px'
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      color: '#6b7280',
      marginBottom: '12px'
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    viewButton: {
      backgroundColor: '#0076BE',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    speciesTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px'
    },
    speciesTag: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px'
    },
    pricesSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      padding: '24px'
    },
    pricesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '16px'
    },
    priceCard: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px'
    },
    priceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    speciesName: {
      fontWeight: '600',
      color: '#111827'
    },
    priceValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#0076BE',
      marginBottom: '8px'
    },
    priceTrend: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px'
    }
  };

  // Responsive styles
  if (window.innerWidth >= 768) {
    styles.hatcheriesGrid.gridTemplateColumns = 'repeat(2, 1fr)';
    styles.pricesGrid.gridTemplateColumns = 'repeat(2, 1fr)';
  }
  
  if (window.innerWidth >= 1024) {
    styles.hatcheriesGrid.gridTemplateColumns = 'repeat(3, 1fr)';
    styles.pricesGrid.gridTemplateColumns = 'repeat(4, 1fr)';
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        {/* Page Header */}
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Brood Stock</h1>
          <p style={styles.pageDescription}>
            Premium parent stock from trusted hatcheries across India. Ensure genetic quality for your aquaculture business.
          </p>
        </div>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <div style={{position: 'relative'}}>
            <input
              type="text"
              placeholder="Search hatcheries by name, location, or species..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <div style={{position: 'absolute', right: '12px', top: '12px'}}>
              <svg style={{width: '24px', height: '24px', color: '#9ca3af'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hatcheries Grid */}
        <div style={{marginBottom: '64px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
            <h2 style={styles.sectionTitle}>Featured Hatcheries</h2>
            <span style={{color: '#6b7280'}}>{filteredHatcheries.length} hatcheries found</span>
          </div>
          
          <div style={styles.hatcheriesGrid}>
            {filteredHatcheries.map((hatchery) => (
              <div key={hatchery.id} style={styles.hatcheryCard}>
                {/* Hatchery Image */}
                <div style={styles.hatcheryImage}>
                  <div style={{color: 'white', textAlign: 'center'}}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 8px'
                    }}>
                      <svg style={{width: '32px', height: '32px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p style={{fontSize: '14px', opacity: 0.9}}>Hatchery Image</p>
                  </div>
                </div>
                
                {/* Hatchery Details */}
                <div style={styles.hatcheryContent}>
                  <div style={styles.hatcheryHeader}>
                    <h3 style={styles.hatcheryName}>{hatchery.name}</h3>
                    <div style={styles.rating}>
                      <svg style={{width: '16px', height: '16px', color: '#16a34a', marginRight: '4px'}} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span style={{color: '#166534', fontWeight: '500', fontSize: '14px'}}>{hatchery.rating}</span>
                    </div>
                  </div>
                  
                  <div style={styles.location}>
                    <svg style={{width: '16px', height: '16px', marginRight: '8px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {hatchery.location}
                  </div>
                  
                  <div style={styles.detailsRow}>
                    <div>
                      <span style={{fontSize: '14px', color: '#6b7280'}}>Available Pieces</span>
                      <p style={{fontSize: '18px', fontWeight: 'bold', color: '#0076BE'}}>{hatchery.availablePieces.toLocaleString()}</p>
                    </div>
                    <button style={styles.viewButton}>
                      View Details
                    </button>
                  </div>
                  
                  <div style={styles.speciesTags}>
                    {hatchery.species.map((species, index) => (
                      <span key={index} style={styles.speciesTag}>
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seed Prices Section */}
        <div style={styles.pricesSection}>
          <h2 style={styles.sectionTitle}>Current Seed Prices</h2>
          
          <div style={styles.pricesGrid}>
            {seedPrices.map((seed, index) => (
              <div key={index} style={styles.priceCard}>
                <div style={styles.priceHeader}>
                  <h3 style={styles.speciesName}>{seed.species}</h3>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: seed.trend === 'up' ? '#16a34a' : seed.trend === 'down' ? '#dc2626' : '#6b7280'
                  }}>
                    {seed.change}
                  </span>
                </div>
                <p style={styles.priceValue}>{seed.price}</p>
                <div style={styles.priceTrend}>
                  <svg style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '4px',
                    color: seed.trend === 'up' ? '#16a34a' : seed.trend === 'down' ? '#dc2626' : '#9ca3af',
                    transform: seed.trend === 'down' ? 'rotate(180deg)' : 'none'
                  }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{
                    fontSize: '14px',
                    color: seed.trend === 'up' ? '#16a34a' : seed.trend === 'down' ? '#dc2626' : '#6b7280'
                  }}>
                    {seed.trend === 'up' ? 'Increasing' : seed.trend === 'down' ? 'Decreasing' : 'Stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroodStock;