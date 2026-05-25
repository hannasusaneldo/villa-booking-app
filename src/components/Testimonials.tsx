"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rahul & Priya Menon",
    location: "Bangalore",
    rating: 5,
    date: "March 2026",
    review:
      "An absolutely breathtaking experience. The villa exceeded every expectation — the wooden interiors, the pool, the staff. We felt like royalty. Will definitely be back.",
  },
  {
    name: "James & Sarah Thomas",
    location: "Dubai",
    rating: 5,
    date: "February 2026",
    review:
      "LaSantiya is unlike any villa we have stayed in. The architecture is stunning, the surroundings peaceful, and the service impeccable. A true hidden gem in Wayanad.",
  },
  {
    name: "Arun Krishnan",
    location: "Chennai",
    rating: 5,
    date: "January 2026",
    review:
      "Hosted our family reunion here and it was perfect. The open auditorium, the pool, the spacious rooms — everything was flawless. The staff went above and beyond.",
  },
  {
    name: "Meera & Suresh Nair",
    location: "Kochi",
    rating: 5,
    date: "December 2025",
    review:
      "We celebrated our anniversary at LaSantiya and it was magical. The ambience, the food, the attention to detail — everything was perfect. Highly recommend.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .testimonials-section {
          background: #080604;
          padding: 120px 2rem;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(212, 185, 140, 0.4));
        }

        .testimonials-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(6rem, 15vw, 14rem);
          font-weight: 300;
          color: rgba(212, 185, 140, 0.03);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.1em;
          user-select: none;
        }

        .testimonials-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .testimonials-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonials-eyebrow {
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

        .testimonials-eyebrow::before,
        .testimonials-eyebrow::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: #D4B98C;
          opacity: 0.5;
        }

        .testimonials-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .testimonials-title em {
          font-style: italic;
          color: #D4B98C;
        }

        .testimonial-card {
          text-align: center;
          padding: 60px 40px;
          border: 1px solid rgba(212, 185, 140, 0.1);
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease;
        }

        .testimonial-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 120px;
          line-height: 0.5;
          color: rgba(212, 185, 140, 0.15);
          margin-bottom: 2rem;
          display: block;
        }

        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 2rem;
        }

        .testimonial-star {
          color: #D4B98C;
          font-size: 14px;
        }

        .testimonial-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.9;
          letter-spacing: 0.02em;
          margin-bottom: 2.5rem;
          transition: opacity 0.4s ease;
        }

        .testimonial-divider {
          width: 40px;
          height: 1px;
          background: #D4B98C;
          margin: 0 auto 1.5rem;
          opacity: 0.5;
        }

        .testimonial-name {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #fff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .testimonial-meta {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .testimonials-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }

        .testimonial-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(212, 185, 140, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .testimonial-dot.active {
          background: #D4B98C;
          transform: scale(1.3);
        }

        .testimonials-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .testimonials-nav-btn {
          background: none;
          border: 1px solid rgba(212, 185, 140, 0.2);
          color: #D4B98C;
          width: 44px;
          height: 44px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonials-nav-btn:hover {
          border-color: #D4B98C;
          background: rgba(212, 185, 140, 0.08);
        }

        @media (max-width: 600px) {
          .testimonials-section { padding: 80px 1.5rem; }
          .testimonial-card { padding: 40px 24px; }
        }
      `}</style>

      <section className="testimonials-section" ref={sectionRef}>
        <div className="testimonials-bg-text">Reviews</div>

        <div className="testimonials-inner">
          <div className={`testimonials-header${visible ? " visible" : ""}`}>
            <p className="testimonials-eyebrow">Guest Experiences</p>
            <h2 className="testimonials-title">
              What Our <em>Guests</em> Say
            </h2>
          </div>

          <div className={`testimonial-card${visible ? " visible" : ""}`}>
            <span className="testimonial-quote-mark">"</span>

            <div className="testimonial-stars">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i} className="testimonial-star">★</span>
              ))}
            </div>

            <p className="testimonial-text">
              {testimonials[active].review}
            </p>

            <div className="testimonial-divider" />

            <p className="testimonial-name">{testimonials[active].name}</p>
            <p className="testimonial-meta">
              {testimonials[active].location} · {testimonials[active].date}
            </p>
          </div>

          <div className="testimonials-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <div className="testimonials-nav">
            <button
              className="testimonials-nav-btn"
              onClick={() => setActive(active > 0 ? active - 1 : testimonials.length - 1)}
            >
              ‹
            </button>
            <button
              className="testimonials-nav-btn"
              onClick={() => setActive(active < testimonials.length - 1 ? active + 1 : 0)}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}