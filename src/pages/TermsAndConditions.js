import React from 'react';

const TermsAndConditions = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using the Best Seeds platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.'
    },
    {
      title: 'Orders & Purchases',
      content: 'All orders placed through Best Seeds are subject to product availability and confirmation of the order price. We reserve the right to refuse or cancel any order for any reason, including product availability, pricing errors, or fraud detection. Prices for seeds and aquaculture products are subject to change based on market conditions.'
    },
    {
      title: 'Shipping & Delivery',
      content: 'Best Seeds provides temperature-controlled vehicle delivery for all seed orders. Delivery timelines are estimated and may vary based on location, weather conditions, and product availability. We aim to deliver within 24 hours for local orders. Risk of loss and title for items pass to you upon delivery.'
    },
    {
      title: 'Pricing & Payments',
      content: 'All prices displayed on the platform are in local currency and are subject to real-time market fluctuations. Payment must be completed at the time of order placement. Market prices for seeds are updated hourly and the final price is locked at the time of order confirmation.'
    },
    {
      title: 'Returns & Refunds',
      content: 'Due to the perishable nature of live seeds and aquaculture products, returns are accepted only if the product is damaged during transit or does not match the order specifications. Claims must be reported within 24 hours of delivery with photographic evidence. Refunds will be processed within 7-10 business days.'
    },
    {
      title: 'Quality Guarantee',
      content: 'Best Seeds guarantees a minimum 98% survival rate for all seed products when proper handling guidelines are followed. Our seeds undergo rigorous quality testing at certified hatcheries. The guarantee is void if recommended storage and handling procedures are not followed.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Best Seeds shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific product or service giving rise to the claim.'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the platform. Your continued use of Best Seeds after any changes indicates your acceptance of the updated terms.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0076BE 0%, #00a8ff 100%)',
        color: 'white', padding: '56px 0', textAlign: 'center'
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 16px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '12px' }}>Terms & Conditions</h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
            Please read these terms carefully before using the Best Seeds platform.
          </p>
          <span style={{
            display: 'inline-block', marginTop: '18px',
            background: 'rgba(255,255,255,0.15)', padding: '6px 18px',
            borderRadius: '20px', fontSize: '0.85rem'
          }}>Last Updated: April 2026</span>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '48px 0 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{
            background: 'white', borderRadius: '16px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)', overflow: 'hidden'
          }}>
            {sections.map((section, i) => (
              <div key={i} style={{
                padding: '28px 32px',
                borderBottom: i < sections.length - 1 ? '1px solid #f1f5f9' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: '#e0f2fe', color: '#0076BE',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, flexShrink: 0
                  }}>{i + 1}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1f2937', margin: 0 }}>
                    {section.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75,
                  margin: 0, paddingLeft: '40px'
                }}>{section.content}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', marginTop: '24px' }}>
            By continuing to use our platform, you agree to these terms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
