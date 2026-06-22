import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/about", label: "Rreth nesh" },
  { to: "/products", label: "Produktet" },
  { to: "/partners", label: "Partnerët" },
  { to: "/keshilla", label: "Këshilla" },
  { to: "/contact", label: "Kontakt" },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink to="/about" className="site-logo" aria-label="Ozzo Pharm">
            <img src="/app/ozzo.png" alt="" className="logo-mark" />
            <span className="brand-text">
              <span>Ozzo</span>Pharm
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
          <span>© 2026. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};
