"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .contact-page { background: #0a0806; min-height: 100vh; }

        /* ── HERO ── */
        .contact-hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          background-image: url('/hero2.jpeg');
          background-size: cover;
          background-position: center 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 6, 0.7);
        }
        .contact-hero-content { position: relative; z-index: 1; padding: 0 1.5rem; }
        .contact-hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #D4B98C;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .contact-hero-eyebrow::before, .contact-hero-eyebrow::after {
          content: ''; display: block; width: 40px; height: 1px; background: #D4B98C; opacity: 0.6;
        }
        .contact-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 300;
          color: #fff;
          letter-spacing: 0.04em;
        }
        .contact-hero-title em { font-style: italic; color: #D4B98C; }

        /* ── MAIN GRID ── */
        .contact-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 2rem;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        /* ── LEFT INFO ── */
        .contact-info { }
        .contact-info-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #D4B98C;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .contact-info-eyebrow::after { content: ''; display: block; width: 40px; height: 1px; background: #D4B98C; opacity: 0.5; }
        .contact-info-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .contact-info-title em { font-style: italic; color: #D4B98C; }
        .contact-info-desc {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 2;
          margin-bottom: 3rem;
        }

        .contact-details { display: flex; flex-direction: column; gap: 0; }
        .contact-detail-item {
          padding: 20px 0;
          border-bottom: 1px solid rgba(212,185,140,0.1);
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .contact-detail-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(212,185,140,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .contact-detail-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #D4B98C;
          margin-bottom: 4px;
        }
        .contact-detail-value {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-detail-value:hover { color: #D4B98C; }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 2rem;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0a0806;
          background: #25D366;
          text-decoration: none;
          padding: 14px 28px;
          transition: all 0.3s ease;
        }
        .whatsapp-btn:hover { background: #20bd5a; transform: translateY(-2px); }

        /* ── FORM ── */
        .contact-form-wrap {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(212,185,140,0.12);
          padding: 48px;
        }
        .form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 300;
          color: #fff;
          margin-bottom: 8px;
        }
        .form-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em;
          margin-bottom: 2.5rem;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .form-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .form-input, .form-select, .form-textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,185,140,0.15);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: rgba(212,185,140,0.4);
        }
        .form-select { cursor: pointer; }
        .form-select option { background: #1a1612; color: #fff; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit {
          width: 100%;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #0a0806;
          background: #D4B98C;
          border: none;
          padding: 18px;
          cursor: pointer;
          margin-top: 8px;
          transition: all 0.3s ease;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .form-submit:hover { background: #e8cfa0; transform: translateY(-1px); }

        /* ── SUCCESS ── */
        .success-box {
          text-align: center;
          padding: 60px 40px;
        }
        .success-icon { font-size: 48px; margin-bottom: 1.5rem; display: block; }
        .success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 300;
          color: #fff;
          margin-bottom: 1rem;
        }
        .success-text {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 2;
        }

        /* ── MAP STRIP ── */
        .contact-map-strip {
          max-width: 1200px;
          margin: 0 auto 100px;
          padding: 0 2rem;
        }
        .map-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #fff;
          margin-bottom: 2rem;
          text-align: center;
        }
        .map-title em { font-style: italic; color: #D4B98C; }
        .map-embed {
          width: 100%;
          height: 400px;
          border: 1px solid rgba(212,185,140,0.12);
          filter: grayscale(0.3) invert(0.9) hue-rotate(180deg);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .contact-main { grid-template-columns: 1fr; gap: 48px; }
          .contact-form-wrap { padding: 32px 24px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-page">
        <Navbar />

        {/* Hero */}
        <div className="contact-hero" style={{ paddingTop: "80px" }}>
          <div className="contact-hero-content">
            <p className="contact-hero-eyebrow">Get In Touch</p>
            <h1 className="contact-hero-title">Contact <em>Us</em></h1>
          </div>
        </div>

        {/* Main */}
        <div className="contact-main">

          {/* Left — info */}
          <div className="contact-info">
            <p className="contact-info-eyebrow">Reach Out</p>
            <h2 className="contact-info-title">
              Plan Your <em>Stay</em> at LaSantiya
            </h2>
            <p className="contact-info-desc">
              We would love to host you. Reach out to us for bookings, enquiries, or any questions about your stay at LaSantiya Villa.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <p className="contact-detail-label">Phone</p>
                  <a href="tel:+919961890340" className="contact-detail-value">+91 99618 90340</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">💬</div>
                <div>
                  <p className="contact-detail-label">WhatsApp</p>
                  <a href="https://wa.me/919961890340" target="_blank" className="contact-detail-value">+91 99618 90340</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">✉️</div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <a href="mailto:lasantiya@gmail.com" className="contact-detail-value">lasantiya@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <p className="contact-detail-label">Address</p>
                  <p className="contact-detail-value">
                    LA SANTIYA, Kumbalery PO<br />
                    Meenangadi Via, Ambalavayal<br />
                    Wayanad, Kerala – 673591
                  </p>
                </div>
              </div>
            </div>

            
              <a href="https://wa.me/919961890340?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20LaSantiya%20Villa"
              target="_blank"
              className="whatsapp-btn"
            >
              <span>💬</span> Book via WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {!submitted ? (
              <>
                <h3 className="form-title">Send an Enquiry</h3>
                <p className="form-subtitle">We'll get back to you within 24 hours</p>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Number of Guests</label>
                    <select
                      className="form-select form-input"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="">Select guests</option>
                      <option value="1-2">1 – 2 Guests</option>
                      <option value="3-5">3 – 5 Guests</option>
                      <option value="6-10">6 – 10 Guests</option>
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Check-In Date</label>
                    <input
                      className="form-input"
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Check-Out Date</label>
                    <input
                      className="form-input"
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Tell us about your stay — special requests, event details, or any questions..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="form-submit" onClick={handleSubmit}>
                  Send Enquiry
                </button>
              </>
            ) : (
              <div className="success-box">
                <span className="success-icon">✅</span>
                <h3 className="success-title">Enquiry Sent!</h3>
                <p className="success-text">
                  Thank you, {formData.name}! We have received your enquiry and will get back to you within 24 hours.<br /><br />
                  For immediate assistance, WhatsApp us at +91 99618 90340.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="contact-map-strip">
          <h3 className="map-title">Find <em>Us</em></h3>
          <iframe
            className="map-embed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.345!2d76.1!3d11.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmbalavayal%2C+Wayanad%2C+Kerala!5e0!3m2!1sen!2sin!4v1234567890"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}