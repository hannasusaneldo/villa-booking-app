import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#0a0806", color: "#ffffff", padding: "4rem 0 2rem 0", fontFamily: "'Jost', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <h3 style={{ color: "#D4B98C", fontSize: "1.4rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, marginBottom: "1rem", letterSpacing: "0.05em" }}>La Santiya</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", lineHeight: "1.8", fontWeight: 300, letterSpacing: "0.05em" }}>
              A private luxury villa retreat for those who seek comfort and unforgettable experiences.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#D4B98C", fontSize: "9px", fontWeight: 300, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Explore</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Gallery", href: "/gallery" }, { label: "Contact", href: "/contact" }].map((link) => (
                <li key={link.href} style={{ marginBottom: "0.6rem" }}>
                  <Link href={link.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#D4B98C", fontSize: "9px", fontWeight: 300, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Contact Us</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.6rem" }}>
                <a href="https://wa.me/916282868859" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
                  WhatsApp: +91 6282868859
                </a>
              </li>
              <li style={{ marginBottom: "0.6rem" }}>
                <a href="tel:+916282868859" style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
                  Phone: +91 6282868859
                </a>
              </li>
              <li>
                <a href="mailto:hannasusaneldo03@gmail.com" style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textDecoration: "none" }}>
                  hannasusaneldo03@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212, 185, 140, 0.15)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            © {currentYear} La Santiya. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}