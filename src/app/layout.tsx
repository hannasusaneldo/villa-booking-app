import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Santiya — Premium Villa in Wayanad, Kerala",
  description: "Experience luxury at La Santiya, a premium service villa in Ambalavayal, Wayanad. Surrounded by majestic rock mountains, scenic viewpoints, and nature-rich landscapes. Book your stay today.",
  keywords: "La Santiya, Wayanad villa, luxury villa Kerala, Ambalavayal villa, premium stay Wayanad, villa booking Kerala, rock mountain villa",
  openGraph: {
    title: "La Santiya — Premium Villa in Wayanad, Kerala",
    description: "Luxury stay amid the mighty rock mountains of Wayanad. Book your private escape at La Santiya.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/Villa3.jpeg",
        width: 1200,
        height: 630,
        alt: "La Santiya Villa Wayanad",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}