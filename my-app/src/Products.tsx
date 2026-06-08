import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout.tsx";

const products = [
  { name: "The Mossi London", route: "/mossi", category: "Hair care" },
  { name: "BronhoMax", route: "/bronho", category: "Respiratory" },
  { name: "CarboSil", route: "/carbo", category: "Digestive care" },
  { name: "Flexo", route: "/flexo", category: "Joint support" },
  { name: "Fornos", route: "/fornos", category: "Nasal care" },
  { name: "I.S BOOSTER", route: "/imuno", category: "Immune support" },
  { name: "Ginginox", route: "/ginginox", category: "Oral care" },
  { name: "HemoMax", route: "/hemo", category: "Topical care" },
  { name: "CardioMix", route: "/cardio", category: "Cardio support" },
  { name: "Daily D", route: "/daily", category: "Vitamins" },
  { name: "Dot Spot", route: "/dot", category: "Skin care" },
  { name: "Forvax C", route: "/forvax", category: "Vitamin C" },
  { name: "Fero Blue", route: "/fero", category: "Iron support" },
  { name: "MiVita", route: "/mivita", category: "Wellness" },
  { name: "Neurospin", route: "/neuro", category: "Neuro support" },
  { name: "PropoMax", route: "/propo", category: "Throat care" },
  { name: "RexidroSol", route: "/rexidro", category: "Hydration" },
  { name: "TriMagnezij", route: "/magnez", category: "Magnesium" },
  { name: "UriBlock", route: "/uriblock", category: "Urinary care" },
  { name: "AloeVera", route: "/aloe", category: "Natural care" },
  { name: "VenoMax", route: "/veno", category: "Circulation" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="section page-intro">
        <span className="eyebrow">Portofoli</span>
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
