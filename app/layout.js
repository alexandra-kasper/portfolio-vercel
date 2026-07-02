// app/layout.js
import { IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-loaded",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-loaded",
});

export const metadata = {
  title: "Alexandra — Product Manager",
  description:
    "Process engineer turned product manager. Manufacturing, health tech, and EasyStride — a gait-analysis wearable case study.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
