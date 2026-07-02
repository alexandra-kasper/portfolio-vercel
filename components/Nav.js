"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <img
            src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/logo_ak_colors.png"
            alt="AK logo"
          />
          <span>Alexandra Kasper</span>
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="https://linkedin.com/in/alexandra-kasper" target="_blank" rel="noopener">LinkedIn</Link>
        </div>
      </div>
    </nav>
  );
}
