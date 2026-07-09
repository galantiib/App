import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout.tsx";

const products = [
{ name: "The Mossi London", route: "/mossi", category: "Kujdesi për flokët" },
{ name: "BronhoMax", route: "/bronho", category: "Respirator" },
{ name: "CarboSil", route: "/carbo", category: "Kujdesi tretës" },
{ name: "Flexo", route: "/flexo", category: "Mbështetje për nyjet" },
{ name: "Ginginox", route: "/ginginox", category: "Kujdesi oral" },
{name: "SinuSil", route: "/sinu", category:"Mbështetje për sistemin respirator dhe sinuset"},
{name: "Boulardii Family", route: "/lardii", category:"Suplement ushqimor probiotik"},
{name: "Prenatal Total", route: "/total", category:"Suplement ushqimor prenatal"},
{ name: "Dot Spot", route: "/dot", category: "Kujdesi i lëkurës" },
{ name: "Forvax C", route: "/forvax", category: "Kujdesi i veshit" },
{ name: "MiVita", route: "/mivita", category: "Mirëqenie" },
{ name: "Neurospin", route: "/neuro", category: "Mbështetje nervore" },
{ name: "RexidroSol", route: "/rexidro", category: "Hidratim" },
{ name: "TriMagnezij", route: "/magnez", category: "Magnez" },
{ name: "UriBlock", route: "/uriblock", category: "Kujdesi urinar" },
{ name: "AloeVera", route: "/aloe", category: "Kujdes natyral" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="section page-intro">
        <span className="eyebrow">Katalogu</span>
        <h2>Produktet</h2>
        <p>
          Ozzo Pharm ofron një portofol të larmishëm farmaceutik të prodhuar
          sipas standardeve të rrepta të GMP-së dhe sigurimit të cilësisë.
        </p>
      </section>

      <section className="grid product-grid" aria-label="Produktet">
        {products.map((product, productIndex) => (
          <button
            key={product.route}
            type="button"
            onClick={() => navigate(product.route)}
            className="card product-card"
          >
            <span>{String(productIndex + 1).padStart(2, "0")}</span>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </button>
        ))}
      </section>
    </Layout>
  );
};

export default Products;
