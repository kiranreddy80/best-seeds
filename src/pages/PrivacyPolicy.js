import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect personal information such as your name, email address, phone number, and delivery address when you create an account or place an order. We also gather order details, payment information, platform usage data, and basic device information to improve your experience.'
    },
    {
      title: 'How We Use Your Information',
      content: 'Your data is used to process and deliver seed orders, send order confirmations and delivery updates, provide price alerts and climate advisories, connect you with aquaculture experts, and continuously improve our platform and services.'
    },
    {
      title: 'How We Protect Your Data',
      content: 'All data transmissions are encrypted using industry-standard SSL/TLS protocols. We enforce strict access controls, conduct regular security audits and vulnerability assessments, and store your data on secure, encrypted servers with regular backups.'
    },
    {
      title: 'Information Sharing',
      content: 'We share necessary delivery information with our temperature-controlled vehicle partners and payment details with trusted payment processors. We never sell, rent, or trade your personal information to third parties for marketing. We may disclose information only when required by law.'
    },
    {
      title: 'Your Rights & Choices',
      content: 'You can request a copy of all personal data we hold about you at any time. You may update or correct your information through account settings, request deletion of your account and data, and opt out of marketing communications while still receiving essential order notifications.'
    },
    {
      title: 'Cookies & Tracking',
      content: 'We use essential cookies for platform functionality, analytics cookies to understand usage patterns, and preference cookies for a personalized experience. You can manage your cookie preferences through your browser settings at any time.'
    }
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0076BE 0%, #00a8ff 100%)',
        color: 'white', padding: '56px 0', textAlign: 'center'
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 16px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '12px' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
            Your privacy matters to us. Learn how Best Seeds collects, uses, and protects your personal information.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
            {['SSL Encrypted', 'Data Protected', 'GDPR Compliant'].map((badge, i) => (
              <span key={i} style={{
                background: 'rgba(255,255,255,0.15)', padding: '6px 16px',
                borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500
              }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Content */}
      <section style={{ padding: '48px 0 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sections.map((section, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} style={{
                  background: 'white', borderRadius: '14px',
                  boxShadow: isOpen ? '0 4px 20px rgba(0,118,190,0.12)' : '0 2px 10px rgba(0,0,0,0.05)',
                  overflow: 'hidden', transition: 'box-shadow 0.3s',
                  border: isOpen ? '1px solid #0076BE' : '1px solid transparent'
                }}>
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%', padding: '20px 24px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: '16px', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: isOpen ? '#0076BE' : '#e0f2fe',
                        color: isOpen ? 'white' : '#0076BE',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
                        transition: 'all 0.3s'
                      }}>{i + 1}</span>
                      <span style={{
                        fontSize: '1.05rem', fontWeight: 600,
                        color: isOpen ? '#0076BE' : '#1f2937',
                        transition: 'color 0.3s'
                      }}>{section.title}</span>
                    </div>
                    <span style={{
                      fontSize: '1.2rem', color: isOpen ? '#0076BE' : '#9ca3af',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s, color 0.3s', flexShrink: 0
                    }}>&#9660;</span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 22px', paddingLeft: '70px'
                    }}>
                      <p style={{
                        fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.8, margin: 0
                      }}>{section.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', marginTop: '28px' }}>
            Last updated: April 2026. By continuing to use our platform, you agree to this privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
