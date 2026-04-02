const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

import { useState } from "react";

const NavBar = ({ onToggleTheme, theme }) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav-shell">
      <div className="container nav-inner">
        <a className="brand" href="#hero" aria-label="Go to top">
          <span>Rasi P</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button className="hamburger" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && <div className="drawer-overlay" onClick={close} />}
      <div className={`drawer ${open ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span className="brand">Rasi P</span>
          <button className="drawer-close" onClick={close} aria-label="Close menu">✕</button>
        </div>
        <nav className="drawer-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="drawer-footer">
          <button className="theme-toggle" type="button" onClick={() => { onToggleTheme(); close(); }}>
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
