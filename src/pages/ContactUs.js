import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      icon: '📞',
      title: 'Call Us',
      detail: '+1 (234) 567-890',
      sub: 'Mon-Sun, 24/7 Available',
      color: '#0076BE',
      bg: '#e0f2fe'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      detail: 'info@bestseeds.com',
      sub: 'We reply within 2 hours',
      color: '#10b981',
      bg: '#d1fae5'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: 'Seed City, Farmland 12345',
      sub: 'Open for walk-ins',
      color: '#f59e0b',
      bg: '#fef3c7'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      detail: '+1 (234) 567-891',
      sub: 'Quick chat support',
      color: '#6366f1',
      bg: '#e0e7ff'
    }
  ];

  const faqItems = [
    {
      q: 'What types of seeds do you offer?',
      a: 'We offer premium aquaculture seeds including Shrimp, Fish, Prawn, and Crop seeds sourced from certified hatcheries with a 98% survival rate guarantee.'
    },
    {
      q: 'How fast is delivery?',
      a: 'We provide temperature-controlled vehicle delivery within 24 hours for local orders. Delivery timelines may vary based on your location and product availability.'
    },
    {
      q: 'Do you offer expert consultation?',
      a: 'Yes! Our team of aquaculture experts is available 24/7 to provide guidance on seed selection, farm management, water quality, and disease prevention.'
    },
    {
      q: 'What is your return policy?',
      a: 'Due to the perishable nature of live seeds, returns are accepted only if the product is damaged during transit. Claims must be reported within 24 hours with photo evidence.'
    }
  ];

  const styles = {
    page: {
      minHeight: '100vh',
      background: '#f8fafc'
    },
    heroBanner: {
      background: 'linear-gradient(135deg, #0076BE 0%, #00a8ff 50%, #0076BE 100%)',
      color: 'white',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    heroPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 25% 60%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 30%, rgba(255,255,255,0.06) 0%, transparent 40%)',
      pointerEvents: 'none'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      position: 'relative',
      zIndex: 2
    },
    heroContent: {
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto'
    },
    heroIcon: {
      fontSize: '3rem',
      marginBottom: '16px'
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      opacity: 0.9,
      lineHeight: 1.6
    },
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '30px',
      flexWrap: 'wrap'
    },
    heroStat: {
      textAlign: 'center'
    },
    heroStatNumber: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#fbbf24'
    },
    heroStatLabel: {
      fontSize: '0.85rem',
      opacity: 0.8,
      marginTop: '4px'
    },
    contactCardsSection: {
      marginTop: '-50px',
      marginBottom: '60px',
      position: 'relative',
      zIndex: 3
    },
    contactCardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px'
    },
    contactCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '28px 24px',
      textAlign: 'center',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer'
    },
    contactCardIcon: {
      width: '56px',
      height: '56px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      margin: '0 auto 16px'
    },
    contactCardTitle: {
      fontSize: '0.85rem',
      fontWeight: 600,
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '8px'
    },
    contactCardDetail: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '6px'
    },
    contactCardSub: {
      fontSize: '0.85rem',
      color: '#6b7280'
    },
    mainSection: {
      padding: '0 0 80px'
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    },
    formCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '8px'
    },
    formSubtitle: {
      fontSize: '0.95rem',
      color: '#6b7280',
      marginBottom: '28px',
      lineHeight: 1.5
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    formGroupFull: {
      gridColumn: '1 / -1'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#374151'
    },
    input: {
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'all 0.3s',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'inherit'
    },
    textarea: {
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'all 0.3s',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      minHeight: '120px',
      resize: 'vertical'
    },
    submitBtn: {
      background: 'linear-gradient(135deg, #0076BE 0%, #00a8ff 100%)',
      color: 'white',
      padding: '14px 32px',
      borderRadius: '12px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s',
      width: '100%',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    successMsg: {
      background: '#d1fae5',
      color: '#065f46',
      padding: '16px 20px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.95rem',
      fontWeight: 600,
      marginTop: '16px'
    },
    faqSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    faqTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '4px'
    },
    faqSubtitle: {
      fontSize: '0.95rem',
      color: '#6b7280',
      marginBottom: '8px',
      lineHeight: 1.5
    },
    faqCard: {
      background: 'white',
      borderRadius: '14px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    },
    faqQuestion: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px'
    },
    faqAnswer: {
      fontSize: '0.9rem',
      color: '#6b7280',
      lineHeight: 1.7,
      margin: 0,
      paddingLeft: '28px'
    },
    faqDot: {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: '#e0f2fe',
      color: '#0076BE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.7rem',
      fontWeight: 700,
      flexShrink: 0,
      marginTop: '2px'
    },
    mapSection: {
      marginTop: '60px',
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    },
    mapHeader: {
      padding: '28px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #f3f4f6',
      flexWrap: 'wrap',
      gap: '16px'
    },
    mapTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1f2937'
    },
    mapBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: '#d1fae5',
      color: '#065f46',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 600
    },
    mapPlaceholder: {
      height: '280px',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #e0f2fe 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      color: '#0076BE'
    },
    mapPlaceholderIcon: {
      fontSize: '3rem'
    },
    mapPlaceholderText: {
      fontSize: '1.1rem',
      fontWeight: 600
    },
    mapPlaceholderSub: {
      fontSize: '0.9rem',
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Banner */}
      <section style={styles.heroBanner}>
        <div style={styles.heroPattern}></div>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <div style={styles.heroIcon}>📬</div>
            <h1 style={styles.heroTitle}>Get In Touch</h1>
            <p style={styles.heroSubtitle}>
              Have questions about our seeds or need expert advice? We're here to help you grow your aquaculture business.
            </p>
            <div style={styles.heroStats}>
              <div style={styles.heroStat}>
                <div style={styles.heroStatNumber}>24/7</div>
                <div style={styles.heroStatLabel}>Support Available</div>
              </div>
              <div style={styles.heroStat}>
                <div style={styles.heroStatNumber}>&lt;2hr</div>
                <div style={styles.heroStatLabel}>Response Time</div>
              </div>
              <div style={styles.heroStat}>
                <div style={styles.heroStatNumber}>500+</div>
                <div style={styles.heroStatLabel}>Farmers Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={styles.contactCardsSection}>
        <div style={styles.container}>
          <div style={styles.contactCardsGrid}>
            {contactCards.map((card, index) => (
              <div
                key={index}
                style={styles.contactCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ ...styles.contactCardIcon, background: card.bg }}>
                  {card.icon}
                </div>
                <div style={styles.contactCardTitle}>{card.title}</div>
                <div style={{ ...styles.contactCardDetail, color: card.color }}>{card.detail}</div>
                <div style={styles.contactCardSub}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section: Form + FAQ */}
      <section style={styles.mainSection}>
        <div style={styles.container}>
          <div style={styles.mainGrid}>
            {/* Contact Form */}
            <div style={styles.formCard}>
              <h2 style={styles.formTitle}>Send Us a Message</h2>
              <p style={styles.formSubtitle}>
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={styles.input}
                      onFocus={(e) => e.target.style.borderColor = '#0076BE'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={styles.input}
                      onFocus={(e) => e.target.style.borderColor = '#0076BE'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      style={styles.input}
                      onFocus={(e) => e.target.style.borderColor = '#0076BE'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={styles.input}
                      onFocus={(e) => e.target.style.borderColor = '#0076BE'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="seeds">Seed Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="farming">Farming Advice</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={{ ...styles.formGroup, ...styles.formGroupFull }}>
                    <label style={styles.label}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      style={styles.textarea}
                      onFocus={(e) => e.target.style.borderColor = '#0076BE'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>
                  <div style={styles.formGroupFull}>
                    <button
                      type="submit"
                      style={styles.submitBtn}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,118,190,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Send Message ➤
                    </button>
                  </div>
                </div>
              </form>
              {submitted && (
                <div style={styles.successMsg}>
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
            </div>

            {/* FAQ Section */}
            <div style={styles.faqSection}>
              <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
              <p style={styles.faqSubtitle}>Quick answers to common questions about our products and services.</p>
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  style={styles.faqCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={styles.faqQuestion}>
                    <span style={styles.faqDot}>Q</span>
                    {faq.q}
                  </div>
                  <p style={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
