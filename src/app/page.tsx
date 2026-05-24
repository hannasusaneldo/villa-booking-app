"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Amenities from "@/components/Amenities";
export default function Home() {
   const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    if (heroRef.current) {
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        .hero-section { position: relative; height: 100vh; min-height: 700px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .hero-bg { position: absolute; inset: 0; background-image: url('/hero2.jpeg'); background-size: cover; background-position: center center; background-repeat: no-repeat; background-color: #0a0806; will-change: transform; }
        .hero-overlay-1 { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10, 8, 6, 0.6) 0%, rgba(10, 8, 6, 0.45) 40%, rgba(10, 8, 6, 0.75) 100%); }
        .hero-overlay-2 { position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(10, 8, 6, 0.3) 30%, rgba(10, 8, 6, 0.7) 100%); }
        .hero-grain { position: absolute; inset: 0; opacity: 0.04; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); background-size: 200px; pointer-events: none; }
        .hero-content { position: relative; z-index: 10; text-align: center; padding: 0 1.5rem; animation: heroReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes heroReveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .hero-eyebrow { font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 300; letter-spacing: 0.35em; text-transform: uppercase; color: #D4B98C; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 14px; animation: heroReveal 1.4s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-eyebrow::before, .hero-eyebrow::after { content: ''; display: block; width: 40px; height: 1px; background: #D4B98C; opacity: 0.6; }
        .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 9vw, 8rem); font-weight: 300; color: #ffffff; letter-spacing: 0.02em; line-height: 1; margin-bottom: 0.3em; animation: heroReveal 1.4s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both; text-shadow: 0 2px 20px rgba(0,0,0,0.5); }
        .hero-title em { font-style: italic; color: #D4B98C; }
        .hero-subtitle { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.1rem, 2.5vw, 1.6rem); font-weight: 300; font-style: italic; color: rgba(255, 255, 255, 0.9); letter-spacing: 0.05em; margin-bottom: 3rem; animation: heroReveal 1.4s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; text-shadow: 0 2px 12px rgba(0,0,0,0.5); }
        .hero-actions { display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; animation: heroReveal 1.4s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .btn-primary { font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 400; letter-spacing: 0.25em; text-transform: uppercase; color: #0a0806; background: #D4B98C; text-decoration: none; padding: 16px 40px; position: relative; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%); }
        .btn-primary::before { content: ''; position: absolute; inset: 0; background: #fff; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-secondary { font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255, 255, 255, 0.8); text-decoration: none; padding: 16px 32px; border: 1px solid rgba(255, 255, 255, 0.25); transition: all 0.3s ease; }
        .btn-secondary:hover { color: #D4B98C; border-color: #D4B98C; }
        .hero-stats { position: absolute; bottom: 0; left: 0; right: 0; z-index: 10; display: flex; justify-content: center; background: rgba(10, 8, 6, 0.7); backdrop-filter: blur(12px); border-top: 1px solid rgba(212, 185, 140, 0.15); animation: heroReveal 1.4s 0.65s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-stat { flex: 1; max-width: 220px; padding: 20px 24px; text-align: center; border-right: 1px solid rgba(212, 185, 140, 0.1); }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-number { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: #D4B98C; line-height: 1; margin-bottom: 4px; }
        .hero-stat-label { font-family: 'Jost', sans-serif; font-size: 9px; font-weight: 300; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255, 255, 255, 0.45); }
        .scroll-indicator { position: absolute; bottom: 110px; left: 50%; transform: translateX(-50%); z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 8px; animation: heroReveal 1.4s 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, transparent, #D4B98C); animation: scrollPulse 2s ease-in-out infinite; }
        @keyframes scrollPulse { 0%, 100% { opacity: 0.3; transform: scaleY(0.8); } 50% { opacity: 1; transform: scaleY(1); } }
        .scroll-text { font-family: 'Jost', sans-serif; font-size: 8px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.35); writing-mode: vertical-rl; margin-top: 4px; }
        @media (max-width: 600px) { .hero-stats { display: none; } .scroll-indicator { bottom: 40px; } .hero-actions { flex-direction: column; align-items: center; } .btn-primary, .btn-secondary { width: 220px; text-align: center; } }
      `}</style>
      <Navbar />
      <section className="hero-section">
        <div className="hero-bg" ref={heroRef} />
        <div className="hero-overlay-1" />
        <div className="hero-overlay-2" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="hero-eyebrow">Ambalavayal · Wayanad · Kerala</p>
          <h1 className="hero-title">La<em>Santiya</em><br /></h1>
          <p className="hero-subtitle">Premium Service villa</p>
          <p className="hero-subtitle">Where the mountains hold their breath</p>
          <div className="hero-actions">
            <a href="/contact" className="btn-primary"><span>Reserve Your Stay</span></a>
            <a href="/gallery" className="btn-secondary">Explore the Villa</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="hero-stat-number">4</div><div className="hero-stat-label">Bedrooms</div></div>
          <div className="hero-stat"><div className="hero-stat-number">11.5*5 m</div><div className="hero-stat-label">Adult+Kids Pool</div></div>
          <div className="hero-stat"><div className="hero-stat-number">1</div><div className="hero-stat-label">Open Auditorium</div></div>
          <div className="hero-stat"><div className="hero-stat-number">24/7</div><div className="hero-stat-label">Concierge</div></div>
        </div>
      </section>
      <Gallery />
      <Location />
      <Amenities />
      <Footer />
    </>
  );
}