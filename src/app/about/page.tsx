"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missions = [
  "To provide a premium and peaceful stay experience surrounded by the natural beauty of Wayanad",
  "To create a unique tourism destination combining luxury, nature, and private hospitality experiences",
  "To offer high-quality facilities including premium accommodation, event spaces, swimming pool, and scenic leisure areas",
  "To promote experiential tourism through trekking, viewpoints, picnic destinations, and cultural hospitality",
  "To continuously expand and enhance the property with cottages, landscaped gardens, and guest-centric tourism experiences",
  "To contribute to the growth of Wayanad's tourism sector while delivering exceptional customer satisfaction",
];

const highlights = [
  { icon: "🏔️", title: "7 Rock Formations", desc: "Surrounded by seven mighty rock formations unique to the Ambalavayal region" },
  { icon: "🌹", title: "300+ Rose Plants", desc: "A beautifully curated rose garden being developed within the property" },
  { icon: "🏛️", title: "Open Auditorium", desc: "Mini open auditorium for private events, celebrations and gatherings" },
  { icon: "🗺️", title: "5 Nearby Attractions", desc: "Edakkal Caves, Phantom Rock, Karapuzha Dam, Cheengerimala, Manjappara View Point" },
  { icon: "🌅", title: "Sunrise & Sunset Views", desc: "Mesmerizing views above the cloud beds from scenic mountain surroundings" },
  { icon: "🏊", title: "Swimming Pool", desc: "11.5×5m adult and kids pool under development for premium leisure experience" },
];

const usps = [
  { title: "Destination Amid Majestic Rock Landscapes", desc: "Uniquely positioned amidst Wayanad's iconic rock formations offering breathtaking natural views and a peaceful retreat." },
  { title: "Blend of Luxury & Nature", desc: "Premium interiors, spacious accommodation, and leisure-focused infrastructure with the beauty of greenery and viewpoints." },
  { title: "Tourism-Centric Strategic Location", desc: "Quick access to Edakkal Caves, Phantom Rock, Karapuzha Dam, and multiple trekking and picnic destinations." },
  { title: "Experience-Based Hospitality", desc: "Memorable guest experiences through recreational spaces, scenic leisure zones, private gatherings, and nature-oriented activities." },
  { title: "Unique Lifestyle Infrastructure", desc: "Swimming pool, mini open auditorium, party area, and rose garden with 300+ plants enhance the property's exclusivity." },
  { title: "Expansion-Oriented Vision", desc: "Planned additional cottages and enhanced tourism experiences — a scalable boutique destination for modern experiential travelers." },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .about-page { background: #0a0806; min-height: 100vh; }

        /* ── HERO ── */
        .about-hero {
          position: relative;
          height: 60vh;
          min-height: 480px;
          background-image: url('/hero2.jpeg');
          background-size: cover;
          background-position: center 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 6, 0.65);
        }
        .about-hero-content { position: relative; z-index: 1; padding: 0 1.5rem; }
        .about-hero-eyebrow {
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
        .about-hero-eyebrow::before, .about-hero-eyebrow::after {
          content: ''; display: block; width: 40px; height: 1px; background: #D4B98C; opacity: 0.6;
        }
        .about-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 300;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .about-hero-title em { font-style: italic; color: #D4B98C; }

        /* ── SECTIONS ── */
        .about-section { padding: 100px 2rem; max-width: 1200px; margin: 0 auto; }
        .about-divider { width: 1px; height: 80px; background: linear-gradient(to bottom, transparent, rgba(212,185,140,0.4), transparent); margin: 0 auto; }

        /* ── ABOUT TEXT ── */
        .about-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-intro-text { }
        .section-eyebrow {
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
        .section-eyebrow::after { content: ''; display: block; width: 40px; height: 1px; background: #D4B98C; opacity: 0.5; }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 2rem;
          letter-spacing: 0.02em;
        }
        .section-title em { font-style: italic; color: #D4B98C; }
        .section-body {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 2;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }
        .about-address {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #D4B98C;
          letter-spacing: 0.1em;
          border-left: 2px solid rgba(212,185,140,0.3);
          padding-left: 1rem;
          margin-top: 2rem;
          line-height: 1.8;
        }
        .about-intro-visual {
          position: relative;
          height: 500px;
          border: 1px solid rgba(212,185,140,0.12);
          overflow: hidden;
        }
        .about-intro-visual img { width: 100%; height: 100%; object-fit: cover; }
        .about-intro-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: rgba(10,8,6,0.9);
          border: 1px solid rgba(212,185,140,0.2);
          padding: 1rem 1.5rem;
          backdrop-filter: blur(10px);
        }
        .badge-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: #D4B98C;
          line-height: 1;
        }
        .badge-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-top: 4px;
        }

        /* ── HIGHLIGHTS ── */
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(212,185,140,0.12);
        }
        .highlight-card {
          padding: 40px 32px;
          border-right: 1px solid rgba(212,185,140,0.12);
          border-bottom: 1px solid rgba(212,185,140,0.12);
          transition: background 0.3s ease;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.3s ease;
        }
        .highlight-card.visible { opacity: 1; transform: translateY(0); }
        .highlight-card:hover { background: rgba(212,185,140,0.04); }
        .highlight-card:nth-child(3n) { border-right: none; }
        .highlight-icon { font-size: 24px; margin-bottom: 16px; display: block; }
        .highlight-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 400; color: #fff; margin-bottom: 8px; }
        .highlight-desc { font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.4); line-height: 1.8; }

        /* ── VISION & MISSION ── */
        .vm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .vm-card {
          padding: 56px 48px;
          border: 1px solid rgba(212,185,140,0.12);
        }
        .vm-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #D4B98C;
          margin-bottom: 1.5rem;
        }
        .vm-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
        }
        .mission-list { list-style: none; padding: 0; margin: 0; }
        .mission-list li {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          padding: 10px 0;
          border-bottom: 1px solid rgba(212,185,140,0.08);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .mission-list li::before { content: '—'; color: #D4B98C; flex-shrink: 0; margin-top: 2px; }

        /* ── USP ── */
        .usp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(212,185,140,0.08);
        }
        .usp-card {
          background: #0a0806;
          padding: 40px 32px;
          transition: background 0.3s ease;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.3s ease;
        }
        .usp-card.visible { opacity: 1; transform: translateY(0); }
        .usp-card:hover { background: rgba(212,185,140,0.04); }
        .usp-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 300;
          color: rgba(212,185,140,0.15);
          line-height: 1;
          margin-bottom: 16px;
        }
        .usp-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 400; color: #fff; margin-bottom: 12px; }
        .usp-desc { font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.4); line-height: 1.8; }

        /* ── CTA ── */
        .about-cta-section {
          text-align: center;
          padding: 100px 2rem;
          position: relative;
        }
        .about-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/hero.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.08;
        }
        .about-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .about-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 300;
          color: #fff;
          margin-bottom: 1.5rem;
        }
        .about-cta-title em { font-style: italic; color: #D4B98C; }
        .about-cta-text {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 2;
          margin-bottom: 3rem;
          letter-spacing: 0.03em;
        }
        .about-cta-btn {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #0a0806;
          background: #D4B98C;
          text-decoration: none;
          padding: 16px 48px;
          display: inline-block;
          transition: all 0.3s ease;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .about-cta-btn:hover { background: #e8cfa0; transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about-intro { grid-template-columns: 1fr; gap: 40px; }
          .about-intro-visual { height: 300px; }
          .highlights-grid { grid-template-columns: repeat(2, 1fr); }
          .highlight-card:nth-child(3n) { border-right: 1px solid rgba(212,185,140,0.12); }
          .highlight-card:nth-child(2n) { border-right: none; }
          .vm-grid { grid-template-columns: 1fr; }
          .usp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .about-section { padding: 60px 1.5rem; }
          .highlights-grid { grid-template-columns: 1fr; }
          .highlight-card { border-right: none; }
          .usp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="about-page">
        <Navbar />

        {/* Hero */}
        <div className="about-hero" style={{ paddingTop: "80px" }}>
          <div className="about-hero-content">
            <p className="about-hero-eyebrow">Ambalavayal · Wayanad · Kerala</p>
            <h1 className="about-hero-title">About <em>La Santiya</em></h1>
          </div>
        </div>

        <div className="about-divider" />

        {/* About intro */}
        <div className="about-section" ref={sectionRef}>
          <div className="about-intro">
            <div className="about-intro-text">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="section-title">A <em>Premium</em> Villa Destination in Wayanad</h2>
              <p className="section-body">
                LA SANTIYA is a premium service villa located in the scenic tourism destination of Ambalavayal, Wayanad, surrounded by majestic rock mountains, breathtaking viewpoints, and nature-rich landscapes. Designed to deliver a peaceful and luxurious hospitality experience, the property blends premium stay facilities with the beauty of Wayanad's natural environment.
              </p>
              <p className="section-body">
                The villa features 4 premium rooms, 3 spacious halls, elegant interiors, and dedicated spaces for leisure and gatherings. Strategically located near famous attractions such as Edakkal Caves, Phantom Rock, Karapuzha Dam, Cheengerimala, and Manjappara View Point, LA SANTIYA offers a unique combination of comfort, adventure, and scenic tourism.
              </p>
              <p className="section-body">
                What differentiates LA SANTIYA is its immersive nature-based experience surrounded by seven mighty rock formations and unexplored picnic locations. Guests can enjoy mesmerizing sunrise and sunset views above the cloud beds, trekking experiences, and peaceful mountain surroundings.
              </p>
              <div className="about-address">
                LA SANTIYA, Kumbalery PO<br />
                Meenangadi Via, Ambalavayal<br />
                Wayanad, Kerala – 673591
              </div>
            </div>
            <div className="about-intro-visual">
              <img src="/Villa3.jpeg" alt="LaSantiya Villa" />
              <div className="about-intro-badge">
                <div className="badge-number">4+</div>
                <div className="badge-label">Premium Rooms</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-divider" />

        {/* Highlights */}
        <div style={{ padding: "0 2rem 100px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span style={{ width: 40, height: 1, background: "#D4B98C", opacity: 0.5, display: "inline-block" }} />
              What Makes Us Special
              <span style={{ width: 40, height: 1, background: "#D4B98C", opacity: 0.5, display: "inline-block" }} />
            </p>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Villa <em>Highlights</em>
            </h2>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`highlight-card${visible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="highlight-icon">{h.icon}</span>
                <h3 className="highlight-title">{h.title}</h3>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-divider" />

        {/* Vision & Mission */}
        <div style={{ padding: "100px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Vision & <em>Mission</em>
            </h2>
          </div>
          <div className="vm-grid">
            <div className="vm-card">
              <p className="vm-label">Our Vision</p>
              <p className="vm-text">
                To establish LA SANTIYA as one of Wayanad's most preferred premium villa destinations by offering luxury hospitality, nature-driven experiences, and peaceful mountain retreats that blend comfort, tourism, wellness, and memorable guest experiences.
              </p>
            </div>
            <div className="vm-card">
              <p className="vm-label">Our Mission</p>
              <ul className="mission-list">
                {missions.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="about-divider" />

        {/* What Sets Us Apart */}
        <div style={{ padding: "100px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What Sets Us <em>Apart</em>
            </h2>
          </div>
          <div className="usp-grid">
            {usps.map((u, i) => (
              <div
                key={i}
                className={`usp-card${visible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="usp-number">0{i + 1}</div>
                <h3 className="usp-title">{u.title}</h3>
                <p className="usp-desc">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta-section">
          <div className="about-cta-inner">
            <h2 className="about-cta-title">
              Ready to <em>Experience</em> LaSantiya?
            </h2>
            <p className="about-cta-text">
              Escape to Wayanad's most scenic villa destination. Surrounded by rock mountains, lush greenery, and unmatched hospitality — your perfect retreat awaits.
            </p>
            <a href="/contact" className="about-cta-btn">Reserve Your Stay</a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}