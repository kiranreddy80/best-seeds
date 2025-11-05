import React, { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  const categories = ['All', 'Shrimp', 'Fish', 'Prawn', 'Crop', 'Organic', 'Medicines'];
  
  // Initial seed products
  const seedProducts = [
    { 
      id: 1, 
      name: "Premium Tiger Shrimp Seeds", 
     
      category: "Shrimp", 
      image: "🦐",
      rating: 4.8,
      reviews: 124,
      tags: ["Fast Growth", "Disease Resistant", "Best Seller"],
      delivery: "24h",
      stock: "In Stock"
    },
    { 
      id: 2, 
      name: "Organic Tilapia Fish Seeds", 
     
      category: "Fish", 
      image: "🐟",
      rating: 4.6,
      reviews: 89,
      tags: ["Organic", "High Survival", "Fresh"],
      delivery: "24h",
      stock: "In Stock"
    },
    { 
      id: 3, 
      name: "Freshwater Prawn Seeds", 
    
      category: "Prawn", 
      image: "🦐",
      rating: 4.9,
      reviews: 67,
      tags: ["Premium", "Large Size", "Limited Stock"],
      delivery: "48h",
      stock: "Low Stock"
    }
  ];

  // Medicine products that load when clicking "Load More"
  const medicineProducts = [
    { 
      id: 4, 
      name: "Gut Well - Probiotic Supplement", 
    
      category: "Medicines", 
      image: "💊",
      rating: 4.7,
      reviews: 89,
      tags: ["Digestive Health", "Gut Balance", "Water Quality"],
      delivery: "24h",
      stock: "In Stock"
    },
    { 
      id: 5, 
      name: "Aqua Probiotic Powder", 
   
      category: "Medicines", 
      image: "🧪",
      rating: 4.8,
      reviews: 67,
      tags: ["Beneficial Bacteria", "Waste Control", "Natural"],
      delivery: "24h",
      stock: "In Stock"
    },
    { 
      id: 6, 
      name: "Immuno Booster Plus", 
    
      category: "Medicines", 
      image: "🛡️",
      rating: 4.9,
      reviews: 112,
      tags: ["Immune Support", "Disease Prevention", "Vitality"],
      delivery: "24h",
      stock: "In Stock"
    },
    { 
      id: 7, 
      name: "Water Purifier Pro", 
     
      category: "Medicines", 
      image: "💧",
      rating: 4.6,
      reviews: 94,
      tags: ["Toxin Removal", "Crystal Clear", "Safe"],
      delivery: "24h",
      stock: "In Stock"
    },
    { 
      id: 8, 
      name: "Anti-Fungal Treatment", 
  
      category: "Medicines", 
      image: "🦠",
      rating: 4.5,
      reviews: 78,
      tags: ["Fungal Infections", "Quick Action", "Safe for Fish"],
      delivery: "48h",
      stock: "Low Stock"
    },
    { 
      id: 9, 
      name: "Parasite Guard", 
     
      category: "Medicines", 
      image: "🐛",
      rating: 4.7,
      reviews: 56,
      tags: ["Parasite Control", "Preventive Care", "Effective"],
      delivery: "24h",
      stock: "In Stock"
    }
  ];

  // Combine products based on whether "Load More" was clicked
  const allProducts = showAllProducts 
    ? [...seedProducts, ...medicineProducts]
    : seedProducts;

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const handleLoadMore = () => {
    setShowAllProducts(true);
  };

  // Inline styles
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
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
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#0076BE',
      marginBottom: '12px'
    },
    pageSubtitle: {
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      fontSize: '1.1rem'
    },
    filterContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '24px'
    },
    filterBtn: {
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '500',
      border: '1px solid #d1d5db',
      background: 'white',
      color: '#374151',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    filterBtnActive: {
      background: '#0076BE',
      color: 'white',
      borderColor: '#0076BE'
    },
    searchContainer: {
      background: 'white',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '24px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    },
    searchRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    searchInputContainer: {
      position: 'relative',
      flex: 1
    },
    searchInput: {
      width: '100%',
      padding: '8px 16px 8px 40px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    select: {
      padding: '8px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px'
    },
    applyBtn: {
      background: '#0076BE',
      color: 'white',
      padding: '8px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginTop: '32px'
    },
    productCard: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s'
    },
    productHeader: {
      padding: '16px',
      borderBottom: '1px solid #f3f4f6'
    },
    badgeRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    categoryBadge: {
      background: 'rgba(0, 118, 190, 0.1)',
      color: '#0076BE',
      fontSize: '12px',
      fontWeight: '500',
      padding: '4px 8px',
      borderRadius: '4px'
    },
    medicineBadge: {
      background: 'rgba(139, 69, 19, 0.1)',
      color: '#8B4513',
      fontSize: '12px',
      fontWeight: '500',
      padding: '4px 8px',
      borderRadius: '4px'
    },
    stockBadge: {
      fontSize: '12px',
      fontWeight: '500',
      padding: '4px 8px',
      borderRadius: '4px'
    },
    stockIn: {
      background: '#dcfce7',
      color: '#166534'
    },
    stockLow: {
      background: '#fef3c7',
      color: '#92400e'
    },
    productTitleRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    productIcon: {
      fontSize: '2rem'
    },
    productTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1f2937',
      flex: 1,
      margin: 0
    },
    productContent: {
      padding: '16px'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px'
    },
    stars: {
      display: 'flex'
    },
    ratingText: {
      fontSize: '12px',
      color: '#6b7280'
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px',
      marginBottom: '16px'
    },
    tag: {
      background: '#f3f4f6',
      color: '#6b7280',
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '4px'
    },
    deliveryInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#6b7280',
      fontSize: '14px',
      marginBottom: '16px'
    },
    priceRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    price: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#0076BE'
    },
    addCartBtn: {
      background: '#0076BE',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      transition: 'background 0.3s'
    },
    loadMore: {
      textAlign: 'center',
      marginTop: '32px'
    },
    loadMoreBtn: {
      border: '2px solid #0076BE',
      color: '#0076BE',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    allLoadedMessage: {
      textAlign: 'center',
      color: '#666',
      fontSize: '1.1rem',
      marginTop: '32px',
      padding: '20px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Our Premium Products Collection</h1>
          <p style={styles.pageSubtitle}>
            Handpicked quality seeds and aquaculture medicines with guaranteed results and expert support
          </p>
        </div>

        {/* Category Filter */}
        <div style={styles.filterContainer}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.filterBtn,
                ...(selectedCategory === category ? styles.filterBtnActive : {})
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = '#e5e7eb';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'white';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search and Sort */}
        <div style={styles.searchContainer}>
          <div style={styles.searchRow}>
            <div style={styles.searchInputContainer}>
              <input 
                type="text" 
                placeholder="Search products..." 
                style={styles.searchInput}
              />
              <span style={styles.searchIcon}>🔍</span>
            </div>
            <select style={styles.select}>
              <option>Sort by: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
            <button 
              style={styles.applyBtn}
              onMouseEnter={(e) => e.target.style.background = '#005a8f'}
              onMouseLeave={(e) => e.target.style.background = '#0076BE'}
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div style={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              style={styles.productCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}
            >
              {/* Product Header */}
              <div style={styles.productHeader}>
                <div style={styles.badgeRow}>
                  <span style={
                    product.category === 'Medicines' ? styles.medicineBadge : styles.categoryBadge
                  }>
                    {product.category}
                  </span>
                  <span style={{
                    ...styles.stockBadge,
                    ...(product.stock === 'In Stock' ? styles.stockIn : styles.stockLow)
                  }}>
                    {product.stock}
                  </span>
                </div>
                
                <div style={styles.productTitleRow}>
                  <div style={styles.productIcon}>{product.image}</div>
                  <h3 style={styles.productTitle}>{product.name}</h3>
                </div>
              </div>
              
              {/* Product Info */}
              <div style={styles.productContent}>
                {/* Rating */}
                <div style={styles.rating}>
                  <div style={styles.stars}>{"⭐".repeat(5)}</div>
                  <span style={styles.ratingText}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Tags */}
                <div style={styles.tags}>
                  {product.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Delivery Info */}
                <div style={styles.deliveryInfo}>
                  <span>🚚</span>
                  <span>{product.delivery} delivery</span>
                </div>
                
                {/* Price and Action */}
                <div style={styles.priceRow}>
                  <span style={styles.price}>{product.price}</span>
                  <button 
                    style={styles.addCartBtn}
                    onMouseEnter={(e) => e.target.style.background = '#005a8f'}
                    onMouseLeave={(e) => e.target.style.background = '#0076BE'}
                  >
                    <span></span>
                    CALL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More or All Loaded Message */}
        <div style={styles.loadMore}>
          {!showAllProducts ? (
            <button 
              style={styles.loadMoreBtn}
              onClick={handleLoadMore}
              onMouseEnter={(e) => {
                e.target.style.background = '#0076BE';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#0076BE';
              }}
            >
              Load More Products
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;