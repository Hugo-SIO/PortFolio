import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} – Portfolio Hugo Almazan-Laforet – Tous droits réservés.</p>
      <div className="footer-links">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="mailto:tonmail@example.com">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;