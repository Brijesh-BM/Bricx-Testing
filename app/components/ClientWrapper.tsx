'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Navigation states
  const [navOpen, setNavOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  
  // Newsletter form states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  // Floating Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalMobile, setModalMobile] = useState('');
  const [modalInterests, setModalInterests] = useState<string[]>([]);
  const [modalMessage, setModalMessage] = useState('');
  
  const [modalErrors, setModalErrors] = useState<{
    name?: boolean;
    email?: boolean;
    emailInvalid?: boolean;
  }>({});
  const [modalStatus, setModalStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [modalErrorText, setModalErrorText] = useState('Something went wrong. Please try again.');

  // Handle scroll to sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setHeaderScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close nav on pathname change
  useEffect(() => {
    setNavOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  // Page-specific initialization (FAQ accordion, scroll reveal, slider)
  useEffect(() => {
    // 1. FAQ Accordion initialization
    const faqItems = document.querySelectorAll('.faq-item-card');
    const faqListeners: { trigger: Element; handler: () => void }[] = [];

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content') as HTMLElement;
      const icon = item.querySelector('.faq-icon') as HTMLElement | null;
      if (!trigger || !content) return;

      const handler = () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        // Close all
        faqItems.forEach(el => {
          const c = el.querySelector('.faq-content') as HTMLElement;
          const ic = el.querySelector('.faq-icon') as HTMLElement | null;
          if (c) {
            c.style.maxHeight = '0px';
            c.style.marginTop = '0';
          }
          if (ic) {
            ic.textContent = '+';
            ic.style.transform = 'rotate(0deg)';
          }
        });

        // Open clicked (unless it was already open)
        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.marginTop = '12px';
          if (icon) {
            icon.textContent = '×';
            icon.style.transform = 'rotate(0deg)';
          }
        }
      };

      trigger.addEventListener('click', handler);
      faqListeners.push({ trigger, handler });
    });

    // 2. IntersectionObserver for Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    let observer: IntersectionObserver | null = null;
    
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer?.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      revealElements.forEach(el => observer?.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('revealed'));
    }

    // 3. Cinematic Hero Ken Burns and Parallax
    const heroBg = document.querySelector('.advisory-hero-bg') as HTMLElement;
    let parallaxHandler: (() => void) | null = null;

    if (heroBg) {
      const ENTRY_MS = 3500;
      const heroTag = document.querySelector('.advisory-hero .blog-category');
      
      const tagTimeout = setTimeout(() => {
        heroTag?.classList.add('tag-underlined');
      }, 500);

      const loopTimeout = setTimeout(() => {
        heroBg.classList.add('kb-loop', 'parallax-ready');
      }, ENTRY_MS + 40);

      let pxReady = false;
      const pxReadyTimeout = setTimeout(() => {
        pxReady = true;
      }, ENTRY_MS);

      let ticking = false;
      parallaxHandler = () => {
        if (pxReady && !ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            const hero = heroBg.closest('.advisory-hero');
            if (hero) {
              const rect = hero.getBoundingClientRect();
              if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const offset = -rect.top * 0.15;
                heroBg.style.transform = `translate3d(0, ${offset}px, 0)`;
              }
            }
            ticking = false;
          });
        }
      };

      window.addEventListener('scroll', parallaxHandler, { passive: true });

      faqListeners.push({
        trigger: window as any,
        handler: () => {
          clearTimeout(tagTimeout);
          clearTimeout(loopTimeout);
          clearTimeout(pxReadyTimeout);
        }
      });
    }

    // 4. Featured Slider Navigation
    const track = document.getElementById('slider-track');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    let resizeHandler: (() => void) | null = null;

    if (track && prevBtn && nextBtn) {
      let currentTranslate = 0;
      const gap = 24;

      const getSlideWidth = () => {
        const slide = track.querySelector('.slider-slide') as HTMLElement;
        return slide ? slide.offsetWidth : 0;
      };

      const getMaxTranslate = () => {
        const totalWidth = track.scrollWidth;
        const containerWidth = track.parentElement?.offsetWidth || 0;
        return Math.max(0, totalWidth - containerWidth);
      };

      const handleNext = () => {
        const slideWidth = getSlideWidth();
        const step = slideWidth + gap;
        const max = getMaxTranslate();
        currentTranslate = Math.min(currentTranslate + step, max);
        track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;
      };

      const handlePrev = () => {
        const slideWidth = getSlideWidth();
        const step = slideWidth + gap;
        currentTranslate = Math.max(0, currentTranslate - step);
        track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;
      };

      nextBtn.addEventListener('click', handleNext);
      prevBtn.addEventListener('click', handlePrev);

      resizeHandler = () => {
        currentTranslate = 0;
        track.style.transform = 'translate3d(0, 0, 0)';
      };
      window.addEventListener('resize', resizeHandler);

      // Save listeners for cleanup
      faqListeners.push({ trigger: nextBtn, handler: handleNext });
      faqListeners.push({ trigger: prevBtn, handler: handlePrev });
    }

    // Cleanup listeners
    return () => {
      faqListeners.forEach(({ trigger, handler }) => {
        trigger.removeEventListener('click', handler);
      });
      if (observer) {
        revealElements.forEach(el => observer?.unobserve(el));
      }
      if (parallaxHandler) {
        window.removeEventListener('scroll', parallaxHandler);
      }
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
    };
  }, [pathname]);

  // Handle mobile nav body scroll locking
  const toggleMobileNav = () => {
    if (navOpen) {
      setNavOpen(false);
      document.body.style.overflow = '';
    } else {
      setNavOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  // Keyboard navigation escape close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setNavOpen(false);
        setModalOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Newsletter Submit
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      } else {
        setNewsletterStatus('error');
        setNewsletterError(data.message || 'Error subscribing.');
      }
    } catch (err) {
      setNewsletterStatus('error');
      setNewsletterError('Could not subscribe. Please try again.');
    }
  };

  // Handle Modal Contact Submit
  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: typeof modalErrors = {};
    let hasError = false;

    if (!modalName.trim()) {
      errors.name = true;
      hasError = true;
    }

    const email = modalEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = true;
      hasError = true;
    } else if (!emailRegex.test(email)) {
      errors.emailInvalid = true;
      hasError = true;
    }

    setModalErrors(errors);
    if (hasError) return;

    setModalStatus('loading');
    try {
      const interestsText = modalInterests.join(', ');
      const response = await fetch('/api/contact-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalName.trim(),
          mobile: modalMobile.trim(),
          email: email,
          message: `Area of Interest: ${interestsText || 'None'}\nDetails: ${modalMessage.trim()}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setModalStatus('success');
        setTimeout(() => {
          setModalOpen(false);
          setModalStatus('idle');
          // Reset fields
          setModalName('');
          setModalEmail('');
          setModalMobile('');
          setModalInterests([]);
          setModalMessage('');
        }, 3000);
      } else {
        setModalStatus('error');
        setModalErrorText(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setModalStatus('error');
      setModalErrorText('Network error. Please try again.');
    }
  };

  const handleInterestChange = (interest: string) => {
    setModalInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  // Determine dynamic classes for header based on pathname
  let headerClass = '';
  let customHeaderPadding = headerScrolled ? '12px 0' : '20px 0';
  let customHeaderShadow = headerScrolled ? '0 4px 20px rgba(33, 40, 8, 0.04)' : 'none';

  if (pathname === '/') {
    headerClass = 'home-header';
  } else if (pathname?.startsWith('/blog')) {
    headerClass = 'blog-header';
  }

  if (headerScrolled) {
    headerClass += ' scrolled';
  }

  return (
    <>
      {/* Skip to main content */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Mobile Nav Backdrop Overlay */}
      <div 
        className={`nav-backdrop ${navOpen ? 'active' : ''}`} 
        id="nav-backdrop"
        onClick={() => {
          setNavOpen(false);
          document.body.style.overflow = '';
        }}
      ></div>

      {/* Sticky Navigation Header */}
      <header 
        id="main-header" 
        className={headerClass}
        style={{
          padding: customHeaderPadding,
          boxShadow: customHeaderShadow
        }}
      >
        <div className="nav-container">
          <Link href="/" className="nav-logo" id="logo-anchor">BRICX.AI</Link>

          {/* Navigation Links */}
          <nav className={`nav-menu ${navOpen ? 'open' : ''}`} id="nav-menu" aria-label="Main navigation">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`} id="nav-about">About Bricx</Link>
            <Link href="/advisory" className={`nav-link ${pathname === '/advisory' ? 'active' : ''}`} id="nav-advisory">Leasing Advisory</Link>
            <Link href="/investment-opportunities" className={`nav-link ${pathname === '/investment-opportunities' ? 'active' : ''}`} id="nav-investments">Income Investments</Link>
            <Link href="/land-opportunities" className={`nav-link ${pathname === '/land-opportunities' ? 'active' : ''}`} id="nav-land">Land & Opportunity</Link>
            <Link href="/blog" className={`nav-link ${pathname?.startsWith('/blog') ? 'active' : ''}`} id="nav-blog">Bricx Blogs</Link>
            <Link href="/contact-us" className={`nav-link ${pathname === '/contact-us' ? 'active' : ''}`} id="nav-contact">Contact</Link>
          </nav>

          {/* Right Side Actions */}
          <div className="nav-right">
            <a href="tel:+919070504020" className="nav-cta" id="header-phone-cta">
              <span>+91 90 70 50 40 20</span>
            </a>

            <button 
              type="button" 
              className={`mobile-toggle ${navOpen ? 'open' : ''}`} 
              id="mobile-toggle" 
              aria-label="Toggle Navigation Menu"
              aria-expanded={navOpen}
              aria-controls="nav-menu"
              onClick={toggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="premium-footer">
        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-left">
            <div className="footer-logo">BRICX.AI</div>
            <p className="footer-description">
              Evaluating commercial real estate with the analytical discipline
              of capital markets: examining risk first, structure next, and
              returns last.
            </p>
            <div className="footer-location">
              EST. BENGALURU • KARNATAKA
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-center">
            <h3>CORE PRACTICES</h3>
            <Link href="/about">About Bricx</Link>
            <Link href="/advisory">Leasing Advisory</Link>
            <Link href="/investment-opportunities">Income Investments</Link>
            <Link href="/land-opportunities">Land & Opportunity</Link>
            <Link href="/blog">Bricx Blogs</Link>
            <Link href="/contact-us">Contact</Link>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <h3>HEADQUARTERS</h3>
            <div className="footer-contact">
              <p>
                WeWork Galaxy <br />
                43, Residency Rd, Ashok Nagar, <br />
                Bengaluru, Karnataka 560025
              </p>
            </div>

            <div className="footer-newsletter">
              <h3>NEWSLETTER</h3>
              <p>
                Subscribe for institutional market insights,
                investment opportunities, and advisory updates.
              </p>

              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  id="footer-newsletter-email" 
                  placeholder="Email Address" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" disabled={newsletterStatus === 'loading'}>
                  {newsletterStatus === 'loading' ? '...' : 'SUBSCRIBE'}
                </button>
              </form>

              {newsletterStatus === 'success' && (
                <div id="newsletter-success-msg" style={{ display: 'block', fontSize: '0.85rem', color: '#d4c28a', marginTop: '10px', fontWeight: 500 }}>
                  <i className="fas fa-check-circle"></i> Successfully subscribed!
                </div>
              )}

              {newsletterStatus === 'error' && (
                <div style={{ display: 'block', fontSize: '0.85rem', color: '#c93b3b', marginTop: '10px', fontWeight: 500 }}>
                  <i className="fas fa-exclamation-circle"></i> {newsletterError}
                </div>
              )}
            </div>

            <div className="footer-contact">
              <p>
                <a href="mailto:hello@bricx.ai">hello@bricx.ai</a> <br />
                For secure investor dealroom inquiries
              </p>
            </div>

            <div className="footer-contact">
              <p>
                +91 90 70 50 40 20 <br />
                Secure client advisor hotline
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div>
            © 2026 Bricx.ai. All rights reserved. Registered Indian Entity.
          </div>
          <div className="footer-links">
            <Link href="/terms">Terms of Service</Link>
            <span>•</span>
            <Link href="/privacy">Privacy Charter</Link>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button 
        type="button" 
        id="floating-contact-btn" 
        aria-label="Enquire" 
        title="Enquire"
        onClick={() => setModalOpen(true)}
      >
        ENQUIRE
      </button>

      {/* Contact Modal Overlay & Popup */}
      {modalOpen && (
        <>
          <div 
            className="contact-modal-overlay open" 
            id="contact-modal-overlay" 
            role="presentation"
            onClick={() => setModalOpen(false)}
          ></div>
          
          <div 
            className="contact-modal open" 
            id="contact-modal" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="contact-modal-title" 
            style={{ maxWidth: '900px', width: '95%' }}
          >
            <button 
              type="button" 
              className="contact-modal-close" 
              id="contact-modal-close" 
              aria-label="Close" 
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', color: 'var(--text-charcoal)', zIndex: 10 }}
              onClick={() => setModalOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', paddingTop: '10px' }}>
              <div className="modal-left-column" style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left', justifyContent: 'center' }}>
                <div className="modal-info-card" style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-light)', padding: '28px 24px', borderRadius: '4px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-obsidian)', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', padding: 0 }}>Direct Coordination</h3>
                  <p style={{ marginBottom: '8px', fontSize: '0.85rem', color: 'var(--text-charcoal)' }}>
                    Phone: <a href="tel:+919070504020" style={{ color: 'var(--accent-olive)', fontWeight: 600, textDecoration: 'none' }}>90 70 50 40 20</a>
                  </p>
                  <p style={{ color: 'var(--text-charcoal)', marginBottom: '8px', fontSize: '0.85rem' }}>
                    Email: <a href="mailto:hello@bricx.ai" style={{ color: 'var(--accent-olive)', fontWeight: 600, textDecoration: 'none' }}>hello@bricx.ai</a>
                  </p>
                  <p style={{ color: 'var(--text-charcoal)', fontSize: '0.85rem', marginBottom: 0 }}>
                    Web: <a href="https://bricx.ai" style={{ color: 'var(--accent-olive)', fontWeight: 600, textDecoration: 'none' }}>bricx.ai</a>
                  </p>
                </div>

                <div className="modal-info-card" style={{ backgroundColor: 'var(--bg-cream)', border: '1px solid var(--accent-gold)', padding: '28px 24px', borderRadius: '4px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-obsidian)', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', padding: 0 }}>No sales calls. No pressure. Just a conversation.</h3>
                  <p style={{ lineHeight: 1.6, color: 'var(--text-charcoal)', margin: 0, fontSize: '0.85rem' }}>
                    Our B2B advisory services operate without sales targets, ensuring you receive conflict free spatial planning and capital underwriting counsel.
                  </p>
                </div>
              </div>

              <div className="modal-right-column" style={{ textAlign: 'left' }}>
                <div className="blog-category" style={{ color: 'var(--accent-gold)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Request Consultation</div>
                <h2 id="contact-modal-title" style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, fontSize: '1.8rem', lineHeight: 1.3, color: 'var(--primary-obsidian)', margin: '0 0 1.5rem 0', textTransform: 'uppercase', border: 'none', padding: 0 }}>Start the Conversation</h2>

                <form id="contact-modal-form" onSubmit={handleModalSubmit} noValidate>
                  <div className={`modal-form-group ${modalErrors.name ? 'has-error' : ''}`} id="grp-name">
                    <label htmlFor="modal-name">Full Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      id="modal-name" 
                      className="modal-form-control" 
                      placeholder="Name*" 
                      autoComplete="name"
                      value={modalName}
                      onChange={(e) => setModalName(e.target.value)}
                    />
                    <span className="error-msg">Please enter your name.</span>
                  </div>

                  <div className={`modal-form-group ${modalErrors.email || modalErrors.emailInvalid ? 'has-error' : ''}`} id="grp-email">
                    <label htmlFor="modal-email">Business Email <span className="required">*</span></label>
                    <input 
                      type="email" 
                      id="modal-email" 
                      className="modal-form-control" 
                      placeholder="Email*" 
                      autoComplete="email"
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                    />
                    <span className="error-msg" id="email-error-msg">
                      {modalErrors.emailInvalid ? 'Please enter a valid business email address.' : 'Please enter your business email address.'}
                    </span>
                  </div>

                  <div className="modal-form-group" id="grp-mobile">
                    <label htmlFor="modal-mobile">Phone Number</label>
                    <input 
                      type="tel" 
                      id="modal-mobile" 
                      className="modal-form-control" 
                      placeholder="Phone Number" 
                      autoComplete="tel"
                      value={modalMobile}
                      onChange={(e) => setModalMobile(e.target.value)}
                    />
                  </div>

                  <div className="modal-form-group" id="grp-interest">
                    <label style={{ display: 'block', marginBottom: '12px' }}>Area of Interest</label>
                    <div className="checkbox-group" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '20px' }}>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input 
                          type="checkbox" 
                          name="interest" 
                          value="Leasing Advisory" 
                          style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                          checked={modalInterests.includes('Leasing Advisory')}
                          onChange={() => handleInterestChange('Leasing Advisory')}
                        />
                        Occupier Leasing Advisory
                      </label>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input 
                          type="checkbox" 
                          name="interest" 
                          value="Income Investments" 
                          style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                          checked={modalInterests.includes('Income Investments')}
                          onChange={() => handleInterestChange('Income Investments')}
                        />
                        Income & Portfolio Placements
                      </label>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input 
                          type="checkbox" 
                          name="interest" 
                          value="Land Opportunities" 
                          style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                          checked={modalInterests.includes('Land Opportunities')}
                          onChange={() => handleInterestChange('Land Opportunities')}
                        />
                        Land Plot Development
                      </label>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input 
                          type="checkbox" 
                          name="interest" 
                          value="Other" 
                          style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                          checked={modalInterests.includes('Other')}
                          onChange={() => handleInterestChange('Other')}
                        />
                        General B2B Inquiry
                      </label>
                    </div>
                  </div>

                  <div className="modal-form-group" id="grp-message">
                    <label htmlFor="modal-message">Inquiry Details</label>
                    <textarea 
                      id="modal-message" 
                      className="modal-form-control" 
                      rows={3}
                      value={modalMessage}
                      onChange={(e) => setModalMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="modal-form-actions" style={{ marginTop: '20px' }}>
                    <button type="submit" className="modal-btn-submit" id="modal-submit-btn">Request Consultation</button>
                  </div>
                </form>
              </div>
            </div>

            {/* State Overlay */}
            <div className={`modal-state-overlay ${modalStatus !== 'idle' ? 'open-overlay' : ''} ${modalStatus === 'loading' ? 'state-is-loading' : modalStatus === 'success' ? 'state-is-success' : modalStatus === 'error' ? 'state-is-error' : ''}`} id="contact-modal-state-overlay">
              {modalStatus === 'loading' && (
                <div className="state-loading">
                  <div className="spinner"></div>
                  <p>Submitting...</p>
                </div>
              )}
              {modalStatus === 'success' && (
                <div className="state-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Thank You</h3>
                  <p>Your enquiry has been received successfully.<br />A member of the Bricx.ai team will contact you shortly.</p>
                </div>
              )}
              {modalStatus === 'error' && (
                <div className="state-error">
                  <div className="success-icon" style={{ color: '#c93b3b' }}>
                    <i className="fas fa-exclamation-circle"></i>
                  </div>
                  <h3>Submission Failed</h3>
                  <p id="contact-modal-error-text">{modalErrorText}</p>
                  <button type="button" className="btn-retry" id="contact-modal-retry-btn" onClick={() => setModalStatus('idle')}>Retry</button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
