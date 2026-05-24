import Navbar from "@/components/Navbar";
import Location from "@/components/Location";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Location />
      </div>
    </main>
  );
}