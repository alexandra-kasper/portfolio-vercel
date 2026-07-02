import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img
            className="footer-logo"
            src="https://raw.githubusercontent.com/alexandra-kasper/easystride_public/refs/heads/main/logo_ak_colors.png"
            alt="AK logo"
          />
          <span className="footer-name">Alexandra Kasper</span>
          <span className="footer-copy">© 2026 · Berkeley, CA</span>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#work">Work</Link>
          <Link href="https://linkedin.com/in/alexandra-kasper" target="_blank" rel="noopener">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
