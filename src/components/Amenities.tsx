"use client";

import { useEffect, useRef, useState } from "react";

const amenities = [
  {
    icon: "🛏️",
    title: "4 Luxury Bedrooms",
    description: "Spacious rooms with premium furnishings, antique wooden beds and ensuite bathrooms for ultimate comfort.",
  },
  {
    icon: "🏊",
    title: "Private Swimming Pool",
    description: "An 11.5×5m adult and kids pool surrounded by lush greenery — perfect for a refreshing retreat.",
  },
  {
    icon: "🎭",
    title: "Open Auditorium",
    description: "A stunning open-air auditorium ideal for events, family gatherings, and celebrations under the stars.",
  },
  {
    icon: "🍽️",
    title: "Full Kitchen",
    description: "A fully equipped kitchen with modern appliances. Our staff can prepare authentic Kerala cuisine on request.",
  },
  {
    icon: "🌿",
    title: "Nature Surroundings",
    description: "Nestled in the lush Wayanad forest with breathtaking mountain views and fresh Nilgiri air.",
  },
  {
    icon: "🛎️",
    title: "24/7 Concierge",
    description: "Round-the-clock staff to attend to your every need — from room service to local tour arrangements.",
  },
  {
    icon: "🚗",
    title: "Ample Parking",
    description: "Secure and spacious parking area for multiple vehicles within the villa premises.",
  },
  {
    icon: "📶",
    title: "High-Speed WiFi",
    description: "Stay connected with reliable high-speed internet throughout the entire villa and outdoor areas.",
  },
];

export default function Amenities() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        .amenities-section {
          background: #0a0806;
          padding: 120px 2rem;
          position: relative;
          overflow: hidden;
        }

        .amenities-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(212, 185, 140, 0.4));
        }

        .amenities-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .amenities-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .amenities-eyebrow {
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

        .amenities-eyebrow::before,
        .amenities-eyebrow::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: #D4B98C;
          opacity: 0.5;
        }

        .amenities-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.1;
          letter-spacing: 0.02em;
        }

        .amenities-title em {
          font-style: italic;
          color: #D4B98C;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(212, 185, 140, 0.12);
        }

        .amenity-card {
          padding: 48px 36px;
          border-right: 1px solid rgba(212, 185, 140, 0.12);
          border-bottom: 1px solid rgba(212, 185, 140, 0.12);
          position: relative;
          transition: background 0.4s ease;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.3s ease;
        }

        .amenity-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .amenity-card:nth-child(4n) {
          border-right: none;
        }

        .amenity-card:hover {
          background: rgba(212, 185, 140, 0.04);
        }

        .amenity-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #D4B98C;
          transition: width 0.4s ease;
        }

        .amenity-card:hover::after {
          width: 100%;
        }

        .amenity-icon {
          font-size: 28px;
          margin-bottom: 20px;
          display: block;
          filter: grayscale(0.3);
        }

        .amenity-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }

        .amenity-desc {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.8;
          letter-spacing: 0.02em;
        }

        .amenities-bottom {
          text-align: center;
          margin-top: 80px;
        }

        .amenities-cta {
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

        .amenities-cta:hover {
          background: #e8cfa0;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 185, 140, 0.25);
        }

        @media (max-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .amenity-card:nth-child(4n) {
            border-right: 1px solid rgba(212, 185, 140, 0.12);
          }
          .amenity-card:nth-child(2n) {
            border-right: none;
          }
        }

        @media (max-width: 600px) {
          .amenities-section { padding: 80px 1.5rem; }
          .amenities-grid { grid-template-columns: 1fr; }
          .amenity-card { border-right: none; }
          .amenity-card:nth-child(2n) { border-right: none; }
        }
      `}</style>

      <section className="amenities-section" ref={sectionRef}>
        <div className="amenities-inner">
          <div className="amenities-header">
            <p className="amenities-eyebrow">What We Offer</p>
            <h2 className="amenities-title">
              Villa <em>Amenities</em>
            </h2>
          </div>

          <div className="amenities-grid">
            {amenities.map((item, i) => (
              <div
                key={i}
                className={`amenity-card${visible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="amenity-icon">{item.icon}</span>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="amenities-bottom">
            <a href="/contact" className="amenities-cta">
              Reserve Your Stay
            </a>
          </div>
        </div>
      </section>
    </>
  );
}