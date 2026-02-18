import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <h1><span className="ozzo">ozzo</span>Pharm</h1>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/partners">Partners</Link>
        </nav>
      </header>

      <main className="container">{children}</main>

      <footer>
        <p>© 2026 Ozzo Pharm. All rights reserved.</p>
      </footer>
    </>
  );
};
