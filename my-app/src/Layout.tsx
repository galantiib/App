import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <h1 className="pharm"><span className="ozzo">Ozzo</span >Pharm</h1>
        <nav>
          <Link to="/about">Rreth nesh</Link>
          <Link to="/products">Produktet</Link>
          <Link to="/partners">Partnerët</Link>
          <Link to="/contact">Na Kontaktoni</Link>
        </nav>
      </header>

      <main className="container">{children}</main>

      <footer>
        <p>© 2026 Ozzo Pharm. All rights reserved.</p>
      </footer>
    </>
  );
};
