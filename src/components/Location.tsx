export default function Location() {
  return (
    <section style={{ backgroundColor: "#0a0806", padding: "6rem 0", fontFamily: "'Jost', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#D4B98C", fontSize: "9px", fontWeight: 300, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem" }}>— Find Us —</p>
          <h2 style={{ color: "#ffffff", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.05em" }}>
            Our <em style={{ fontStyle: "italic", color: "#D4B98C" }}>Location</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", fontWeight: 300, letterSpacing: "0.1em", marginTop: "1rem" }}>Ambalavayal, Wayanad, Kerala</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div style={{ borderRadius: "2px", overflow: "hidden", border: "1px solid rgba(212,185,140,0.15)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.1!2d76.1922305!3d11.6361952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: "block", filter: "grayscale(20%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h3 style={{ color: "#D4B98C", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 300, letterSpacing: "0.05em", marginBottom: "2rem" }}>Getting Here</h3>
            {[
              { city: "Ambalavayal", distance: "5 km", time: "10 min" },
              { city: "Kalpetta", distance: "15 km", time: "25 min" },
              { city: "Calicut (Kozhikode)", distance: "95 km", time: "2.5 hrs" },
              { city: "Ooty", distance: "120 km", time: "3 hrs" },
              { city: "Coimbatore", distance: "150 km", time: "3.5 hrs" },
            ].map((item) => (
              <div key={item.city} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid rgba(212,185,140,0.1)" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 300, letterSpacing: "0.1em" }}>{item.city}</span>
                <div>
                  <span style={{ color: "#D4B98C", fontSize: "0.8rem", fontWeight: 300, letterSpacing: "0.1em", marginRight: "1rem" }}>{item.distance}</span>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.1em" }}>{item.time}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop: "2rem" }}>
              <a href="https://www.google.com/maps/place/11%C2%B038%2710.3%22N+76%C2%B011%2741.3%22E/@11.6361952,76.1922305,17z" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0a0806", background: "#D4B98C", textDecoration: "none", padding: "16px 40px", display: "inline-block" }}>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}