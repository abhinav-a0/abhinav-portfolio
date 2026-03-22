import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(darkMode ? "dark-theme" : "light-theme");
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">Abhinav</a>

        <nav className={`nav-links ${open ? "show" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-controls">
          <button
  className={`theme-toggle ${darkMode ? "dark" : "light"}`}
  onClick={() => setDarkMode(!darkMode)}
  aria-label="Toggle Theme"
>
  <div className="toggle-track">
    <div className="toggle-thumb">
      {darkMode ? "🌙" : "☀️"}
    </div>
  </div>
</button>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}