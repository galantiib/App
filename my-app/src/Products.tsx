import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout.tsx";

const products = [
  {
    name: "The Mossi London",
    route: "/mossi",
    category: "Kujdesi per floket",
    image: `${process.env.PUBLIC_URL}/partners/pictures/mossi1.jpg`,
  },
  {
    name: "BronhoMax",
    route: "/bronho",
    category: "Respirator",
    image: `${process.env.PUBLIC_URL}/partners/pictures/surup1.png`,
  },
  {
    name: "CarboSil",
    route: "/carbo",
    category: "Kujdesi tretes",
    image: `${process.env.PUBLIC_URL}/partners/pictures/carbogranula.png`,
  },
  {
    name: "Flexo",
    route: "/flexo",
    category: "Mbeshtetje per nyjet",
    image: `${process.env.PUBLIC_URL}/partners/pictures/flexo1.jpg`,
  },
  {
    name: "Ginginox",
    route: "/ginginox",
    category: "Kujdesi oral",
    image: `${process.env.PUBLIC_URL}/partners/pictures/ging1.jpg`,
  },
  {
    name: "SinuSil",
    route: "/sinu",
    category: "Mbeshtetje per sistemin respirator dhe sinuset",
    image: `${process.env.PUBLIC_URL}/partners/pictures/sinu.jpg`,
  },
  {
    name: "Prenatal Total",
    route: "/total",
    category: "Suplement ushqimor prenatal",
    image: `${process.env.PUBLIC_URL}/partners/pictures/total.jpg`,
  },
  {
    name: "Dot Spot",
    route: "/dot",
    category: "Kujdesi i lekures",
    image: `${process.env.PUBLIC_URL}/partners/pictures/dotspot.jpg`,
  },
  {
    name: "Forvax C",
    route: "/forvax",
    category: "Kujdesi i veshit",
    image: `${process.env.PUBLIC_URL}/partners/pictures/forvax.jpg`,
  },
  {
    name: "MiVita",
    route: "/mivita",
    category: "Mireqenie",
    image: `${process.env.PUBLIC_URL}/partners/pictures/mivita.jpg`,
  },
  {
    name: "Neurospin",
    route: "/neuro",
    category: "Mbeshtetje nervore",
    image: `${process.env.PUBLIC_URL}/partners/pictures/neuro.jpg`,
  },
  {
    name: "RexidroSol",
    route: "/rexidro",
    category: "Hidratim",
    image: `${process.env.PUBLIC_URL}/partners/pictures/rexidro.png`,
  },
  {
    name: "TriMagnezij",
    route: "/magnez",
    category: "Magnez",
    image: `${process.env.PUBLIC_URL}/partners/pictures/magnez.jpg`,
  },
  {
    name: "UriBlock",
    route: "/uriblock",
    category: "Kujdesi urinar",
    image: `${process.env.PUBLIC_URL}/partners/pictures/uri1.jpg`,
  },
  {
    name: "AloeVera",
    route: "/aloe",
    category: "Kujdes natyral",
    image: `${process.env.PUBLIC_URL}/partners/pictures/aloe.png`,
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="section page-intro">
        <span className="eyebrow">Katalogu</span>
        <h2>Produktet</h2>
        <p>
          Ozzo Pharm ofron nje portofol te larmishem farmaceutik te prodhuar
          sipas standardeve te rrepta te GMP-se dhe sigurimit te cilesise.
        </p>
      </section>

      <section className="product-catalog-shell" aria-label="Produktet">
        <div className="product-catalog-header">
          <strong>{products.length}</strong>
          <span>kategori produktesh ne katalog</span>
        </div>

        <div className="product-catalog-list">
          {products.map((product, productIndex) => (
            <button
              key={product.route}
              type="button"
              onClick={() => navigate(product.route)}
              className="card product-card"
            >
              <span className="product-card-index">
                {String(productIndex + 1).padStart(2, "0")}
              </span>
              <span className="product-card-image">
                <img src={product.image} alt={product.name} />
              </span>
              <span className="product-card-copy">
                <strong className="product-card-title">{product.name}</strong>
                <span className="product-card-category">{product.category}</span>
              </span>
              <span className="product-card-action">Shiko detajet</span>
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
