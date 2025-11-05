import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Inline styles
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      color: 'white',
      marginTop: 'auto'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
      gap: '3rem',
      padding: '4rem 0 2rem'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '1rem'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: '#0076BE',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px'
    },
    footerLogoText: {
      display: 'flex',
      flexDirection: 'column'
    },
    footerLogoTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      margin: '0 0 4px 0'
    },
    footerLogoSubtitle: {
      color: '#d1d5db',
      fontSize: '0.875rem',
      margin: 0
    },
    footerDescription: {
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontSize: '0.95rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '0.75rem'
    },
    socialLink: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '18px',
      transition: 'all 0.3s ease'
    },
    footerTitle: {
      color: 'white',
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1.5rem'
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLinkItem: {
      marginBottom: '0.75rem'
    },
    footerLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      fontSize: '0.95rem'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem'
    },
    contactIcon: {
      fontSize: '18px',
      marginTop: '2px',
      flexShrink: 0
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    contactLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      marginBottom: '2px'
    },
    contactValue: {
      color: 'white',
      fontWeight: '500',
      fontSize: '0.95rem'
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      padding: '1.5rem 0'
    },
    footerBottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    footerBottomLinks: {
      display: 'flex',
      gap: '2rem'
    },
    footerBottomLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          {/* Company Info */}
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <div style={styles.logoIcon}>BS</div>
              <div style={styles.footerLogoText}>
                <h3 style={styles.footerLogoTitle}>Best Seeds</h3>
                <p style={styles.footerLogoSubtitle}>Aquaculture Solutions</p>
              </div>
            </div>
            <p style={styles.footerDescription}>
              Your trusted partner in quality seeds and aquaculture solutions. 
              We provide premium seeds, expert guidance, and complete farming support.
            </p>
            <div style={styles.socialLinks}>
              <a 
                href="#" 
                style={styles.socialLink}
                aria-label="Facebook"
                onMouseEnter={(e) => {
                  e.target.style.background = '#0076BE';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                📘
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                aria-label="Twitter"
                onMouseEnter={(e) => {
                  e.target.style.background = '#0076BE';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                🐦
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                aria-label="Instagram"
                onMouseEnter={(e) => {
                  e.target.style.background = '#0076BE';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                📷
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                aria-label="WhatsApp"
                onMouseEnter={(e) => {
                  e.target.style.background = '#0076BE';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li style={styles.footerLinkItem}>
                <Link 
                  to="/products" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Products
                </Link>
              </li>
              <li style={styles.footerLinkItem}>
                <Link 
                  to="/climate-news" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Climate News
                </Link>
              </li>
              <li style={styles.footerLinkItem}>
                <Link 
                  to="/aqua-farming" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Aqua Farming
                </Link>
              </li>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Daily Prices
                </a>
              </li>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Medicines
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Our Services</h4>
            <ul style={styles.footerLinks}>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Seed Delivery
                </a>
              </li>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Farm Management
                </a>
              </li>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Aqua Consulting
                </a>
              </li>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Expert Support
                </a>
              </li>
              <li style={styles.footerLinkItem}>
                <a 
                  href="#" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact Us</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Phone</div>
                  <div style={styles.contactValue}>+1 (234) 567-890</div>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>✉️</span>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Email</div>
                  <div style={styles.contactValue}>info@bestseeds.com</div>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Address</div>
                  <div style={styles.contactValue}>Seed City, Farmland 12345</div>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🕒</span>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Business Hours</div>
                  <div style={styles.contactValue}>Mon-Sun: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <div style={styles.footerBottomContent}>
            <div style={styles.copyright}>
              &copy; {currentYear} Best Seeds. All rights reserved.
            </div>
            <div style={styles.footerBottomLinks}>
              <a 
                href="#" 
                style={styles.footerBottomLink}
                onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                style={styles.footerBottomLink}
                onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                style={styles.footerBottomLink}
                onMouseEnter={(e) => e.target.style.color = '#0076BE'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;