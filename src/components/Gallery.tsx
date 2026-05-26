"use client";
import { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/Villa1.jpeg", alt: "Villa View 1" },
  { src: "/Villa2.jpeg", alt: "Villa View 2" },
  { src: "/Villa3.jpeg", alt: "Villa View 3" },
  { src: "/Villa4.jpeg", alt: "Villa View 4" },
  { src: "/Villa5.jpeg", alt: "Villa View 5" },
  { src: "/Villa6.jpeg", alt: "Villa View 6" },
  { src: "/Villa7.jpeg", alt: "Villa View 7" },
  { src: "/Villa8.jpeg", alt: "Villa View 8" },
];

export default function Gallery({ preview = false }: { preview?: boolean }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const displayPhotos = preview ? photos.slice(0, 4) : photos;

  return (
    <section style={{ backgroundColor: "#0a0806", padding: "6rem 0", fontFamily: "'Jost', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#D4B98C", fontSize: "9px", fontWeight: 300, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem" }}>
            — The Villa —
          </p>
          <h2 style={{ color: "#ffffff", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.05em" }}>
            A Glimpse of <em style={{ fontStyle: "italic", color: "#D4B98C" }}>La Santiya</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
          {displayPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => !preview && setLightbox(index)}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
                overflow: "hidden",
                cursor: preview ? "default" : "pointer",
                backgroundColor: "#1a1a1a",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                style={{ position: "absolute", inset: 0, background: "rgba(10,8,6,0)", transition: "background 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(10,8,6,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(10,8,6,0)")}
              />
            </div>
          ))}
        </div>

        {preview && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/gallery" style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0a0806", background: "#D4B98C", textDecoration: "none", padding: "16px 40px", display: "inline-block" }}>
              View Full Gallery
            </a>
          </div>
        )}
      </div>

      {!preview && lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.95)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
        >
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "1rem", cursor: "pointer", padding: "0.5rem 1rem", fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em" }}>
            CLOSE
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : photos.length - 1); }} style={{ position: "absolute", left: "2rem", background: "none", border: "none", color: "#D4B98C", fontSize: "3rem", cursor: "pointer" }}>
            ‹
          </button>
          <div style={{ position: "relative", width: "80vw", height: "80vh" }}>
            <Image src={photos[lightbox].src} alt={photos[lightbox].alt} fill style={{ objectFit: "contain" }} />
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < photos.length - 1 ? lightbox + 1 : 0); }} style={{ position: "absolute", right: "2rem", background: "none", border: "none", color: "#D4B98C", fontSize: "3rem", cursor: "pointer" }}>
            ›
          </button>
          <p style={{ position: "absolute", bottom: "2rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}