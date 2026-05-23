"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0 2.5rem;
        }

        .nav-root.scrolled {
          background: rgba(10, 8, 6, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(212, 185, 140, 0.15);
          box-shadow: 0 4px 40px rgba(0,0,0,0.3);
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .nav-logo-img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(212, 185, 140, 0.3));
          transition: transform 0.3s ease;
        }

        .nav-logo:hover .nav-logo-img {
          transform: scale(1.05);
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .nav-logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: #fff;
          letter-spacing: 0.04em;
        }

        .nav-logo-tagline {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 300;
          color: #D4B98C;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-top: 3px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #D4B98C;
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-links a:hover {
          color: #D4B98C;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-cta {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0a0806;
          background: #D4B98C;
          border: none;
          padding: 10px 24px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .nav-cta:hover {
          background: #e8cfa0;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212, 185, 140, 0.35);
        }

        .nav-mobile-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .nav-mobile-btn span {
          display: block;
          width: 24px;
          height: 1px;
          background: #fff;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .nav-mobile-btn.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .nav-mobile-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .nav-mobile-btn.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .nav-divider {
          width: 1px;
          height: 18px;
          background: rgba(212, 185, 140, 0.3);
        }

        .nav-mobile-menu {
          display: flex;
          flex-direction: column;
          background: rgba(10, 8, 6, 0.97);
          backdrop-filter: blur(20px);
          padding: 2rem 2.5rem 2.5rem;
          border-top: 1px solid rgba(212, 185, 140, 0.1);
          gap: 1.5rem;
        }

        .nav-mobile-menu a {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.2s;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(212, 185, 140, 0.1);
        }

        .nav-mobile-menu a:hover {
          color: #D4B98C;
        }

        .nav-mobile-menu .nav-cta {
          text-align: center;
          margin-top: 0.5rem;
          clip-path: none;
          border-radius: 2px;
          padding: 13px 24px;
        }

        @media (max-width: 768px) {
          .nav-links, .nav-divider, .nav-cta.desktop {
            display: none;
          }
          .nav-mobile-btn {
            display: flex;
          }
          .nav-root {
            padding: 0 1.5rem;
          }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">

          <a href="/" className="nav-logo">
            <Image
              src="/logo.png"
              alt="LaSantiya Villa"
              width={52}
              height={52}
              className="nav-logo-img"
            />
            <div className="nav-logo-text">
              <span className="nav-logo-name">LaSantiya</span>
              <span className="nav-logo-tagline">Premium Service Villa</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div className="nav-divider" />
            <a href="/contact" className="nav-cta desktop">Book Now</a>
          </div>

          <button
            className={`nav-mobile-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Book Now</a>
          </div>
        )}
      </nav>
    </>
  );
}