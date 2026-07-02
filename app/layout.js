import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Alexandra Kasper - Product Manager",
  description:
    "Product manager with a background in engineering, manufacturing, hardware design, and data analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
