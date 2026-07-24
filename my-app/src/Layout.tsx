import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/about", label: "Rreth nesh" },
  { to: "/products", label: "Produktet" },
  { to: "/partners", label: "Partneret" },
  { to: "/keshilla", label: "Keshilla" },
  { to: "/locations", label: "Lokacionet" },
  { to: "/contact", label: "Kontakt" },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink to="/about" className="site-logo" aria-label="Ozzo Pharm">
            <img src="/App/ozzo.png" className="logo-mark" alt="Ozzo Pharm" />
            <span className="brand-text">
              <span>ozzo</span>pharm
            </span>
          </NavLink>

          <nav className="site-nav" aria-label="Kryesore">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <strong>Ozzo Pharm</strong>
          <span>&copy; 2026. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};
