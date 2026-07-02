'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    setStatus('loading');
    try {
      const inquiryText = interests.join(', ') || 'General B2B Inquiry';
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: `[Inquiry: ${inquiryText}] - ${message.trim()}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorText(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorText('Network error. Please try again.');
    }
  };

  return (
    <>
      {/* Contact Us Hero */}
      <section className="advisory-hero" style={{ backgroundColor: 'var(--accent-olive)' }}>
        <div className="advisory-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop')" }}></div>
        <div className="container">
          <div className="blog-category" style={{ color: 'var(--accent-gold)' }}>Initiate Consultation</div>
          <h1>Contact Bricx.ai | Independent Real Estate Advisory in Bangalore</h1>
          <p>Bricx.ai works with a limited number of clients at any given time. If you are evaluating an office space decision, a commercial property investment, or a land opportunity in Bengaluru, reach out directly.</p>
        </div>
      </section>

      {/* Contact Split Section */}
      <section className="contact-section section-padding reveal-on-scroll">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Office Coordination details */}
            <div className="contact-cards-container">
              <div className="blog-category">Bricx Headquarters</div>

              <div className="contact-card-item child-card stagger-item">
                <h3>Direct Coordination</h3>
                <p style={{ marginBottom: '1rem', color: 'var(--text-charcoal)' }}>
                  Phone: <a href="tel:+919070504020" style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>90 70 50 40 20</a>
                </p>
                <p style={{ color: 'var(--text-charcoal)', marginBottom: '1rem' }}>
                  Email: <a href="mailto:hello@bricx.ai" style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>hello@bricx.ai</a>
                </p>
                <p style={{ color: 'var(--text-charcoal)' }}>
                  Web: <a href="https://bricx.ai" style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>bricx.ai</a>
                </p>
              </div>

              <div className="contact-card-item child-card stagger-item" style={{ backgroundColor: 'var(--bg-cream)', borderColor: 'var(--accent-gold)' }}>
                <h3>No sales calls. No pressure. Just a conversation.</h3>
                <p style={{ lineHeight: 1.6, color: 'var(--text-charcoal)', margin: 0 }}>
                  Our B2B advisory services operate without sales targets, ensuring you receive conflict free spatial planning and capital underwriting counsel.
                </p>
              </div>
            </div>

            {/* Right: Premium comprehensive contact form */}
            <div className="conversation-card stagger-item" style={{ backgroundColor: 'var(--bg-white)' }}>
              {status !== 'success' ? (
                <>
                  <div className="blog-category">Request Consultation</div>
                  <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Start the Conversation</h2>

                  <form id="contact-detailed-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="c-name">Full Name <span style={{ color: 'red' }}>*</span></label>
                      <input 
                        type="text" 
                        id="c-name" 
                        className="form-control" 
                        placeholder="Name*" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-email">Business Email <span style={{ color: 'red' }}>*</span></label>
                      <input 
                        type="email" 
                        id="c-email" 
                        className="form-control" 
                        placeholder="Email*" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-phone">Phone Number</label>
                      <input 
                        type="text" 
                        id="c-phone" 
                        className="form-control" 
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="form-group" id="grp-c-inquiry">
                      <label style={{ display: 'block', marginBottom: '12px' }}>Area of Interest</label>
                      <div className="checkbox-group" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '20px' }}>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                          <input 
                            type="checkbox" 
                            name="c-interest" 
                            value="Leasing Advisory" 
                            style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                            checked={interests.includes('Leasing Advisory')}
                            onChange={() => handleInterestChange('Leasing Advisory')}
                          />
                          Occupier Leasing Advisory
                        </label>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                          <input 
                            type="checkbox" 
                            name="c-interest" 
                            value="Income Investments" 
                            style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                            checked={interests.includes('Income Investments')}
                            onChange={() => handleInterestChange('Income Investments')}
                          />
                          Income & Portfolio Placements
                        </label>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                          <input 
                            type="checkbox" 
                            name="c-interest" 
                            value="Land Opportunities" 
                            style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                            checked={interests.includes('Land Opportunities')}
                            onChange={() => handleInterestChange('Land Opportunities')}
                          />
                          Land Plot Development
                        </label>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                          <input 
                            type="checkbox" 
                            name="c-interest" 
                            value="Other" 
                            style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                            checked={interests.includes('Other')}
                            onChange={() => handleInterestChange('Other')}
                          />
                          General B2B Inquiry
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-message">Inquiry Details</label>
                      <textarea 
                        id="c-message" 
                        className="form-control" 
                        style={{ minHeight: '120px' }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div style={{ color: '#c93b3b', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 500 }}>
                        <i className="fas fa-exclamation-circle"></i> {errorText}
                      </div>
                    )}

                    <button type="submit" className="btn-submit" id="c-submit-btn" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Submitting...' : 'Request Consultation'}
                    </button>
                  </form>
                </>
              ) : (
                <div id="c-success-message" style={{ textAlign: 'center', padding: '30px 0' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-olive)" stroke-width="1.5" style={{ margin: '0 auto 1.5rem auto' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--primary-obsidian)' }}>
                    Consultation Initiated
                  </h3>
                  <p style={{ color: 'var(--text-charcoal)', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto' }}>
                    Thank you for reaching out. A senior Bricx.ai advisory principal will call you on your provided contact
                    number within 2 business hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
