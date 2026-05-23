import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#1a3c34", color: "#ffffff" }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 style={{ color: "#c9a84c" }} className="text-2xl font-bold mb-4">La Santiya</h3>
            <p style={{ color: "#cbd5e1" }} className="text-sm leading-relaxed">
              A private luxury villa retreat for those who seek comfort and unforgettable experiences.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#c9a84c" }} className="text-sm font-semibold uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" style={{ color: "#cbd5e1" }} className="text-sm">Home</Link></li>
              <li><Link href="/about" style={{ color: "#cbd5e1" }} className="text-sm">About</Link></li>
              <li><Link href="/gallery" style={{ color: "#cbd5e1" }} className="text-sm">Gallery</Link></li>
              <li><Link href="/contact" style={{ color: "#cbd5e1" }} className="text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#c9a84c" }} className="text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/916282868859" target="_blank" rel="noopener noreferrer" style={{ color: "#cbd5e1" }} className="text-sm">
                  WhatsApp: +91 6282868859
                </a>
              </li>
              <li>
                <a href="tel:+916282868859" style={{ color: "#cbd5e1" }} className="text-sm">
                  Phone: +91 6282868859
                </a>
              </li>
              <li>
                <a href="mailto:hannasusaneldo03@gmail.com" style={{ color: "#cbd5e1" }} className="text-sm">
                  hannasusaneldo03@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #2d5a4e" }} className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: "#94a3b8" }} className="text-xs">© {currentYear} La Santiya. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" style={{ color: "#94a3b8" }} className="text-xs">Privacy Policy</Link>
              <Link href="/terms" style={{ color: "#94a3b8" }} className="text-xs">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}