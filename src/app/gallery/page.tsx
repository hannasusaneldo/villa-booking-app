import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main style={{ backgroundColor: "#0a0806" }}>
      <Navbar />
      <div style={{ backgroundColor: "#0a0806", minHeight: "80px" }} />
      <Gallery />
      <Footer />
    </main>
  );
}