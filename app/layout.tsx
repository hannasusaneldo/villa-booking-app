import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Santiya — Luxury Villa Retreat",
  description:
    "Experience unmatched luxury at La Santiya villa. Book your private escape with breathtaking views, world-class amenities, and personalised service.",
  keywords: "La Santiya, luxury villa, villa booking, private retreat, holiday villa",
  openGraph: {
    title: "La Santiya — Luxury Villa Retreat",
    description: "Your private luxury escape awaits. Book La Santiya today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}