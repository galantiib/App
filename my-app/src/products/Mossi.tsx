import { useEffect, useState } from "react";
import { Layout } from "../Layout.tsx";
// import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  components: string;
  price: number;
}

const Mossi = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();
 
  useEffect(() => {
    const fetchMossiLondonProducts = async () => {
      try {
        const response = await fetch(
          "https://localhost:7132/api/products/by-name?keyword=Mossi"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Mossi London products");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Something went wrong while loading products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMossiLondonProducts();
  }, []);

  if (loading) {
    return <p>Loading Mossi London products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  
  return (
 
    <Layout>
    <section className="section1">
    <div>  
      <h1 className="mossih1">The Mossi London Products</h1>
      {products.length === 0 && <p>No products found.</p>}

      <div style={{ display: "grid", gap: "16px" }}>
        {products.map((product) => (
          <div
             key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "8px",
                display:"",              
                justifyContent: "space-between", 
                alignItems: "flex-start",     
                gap: "20px",                
              }}
          >
            <h3 className="allh3">{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Components:</strong> {product.components}
            </p>
            <p>
              <strong>Price:</strong> {product.price.toFixed(2)} €
            </p>
            {/* <img src="/partners/pictures/vitamin.png" className="partner-logo" /> */}
          </div>
        ))}
      </div>
    </div>
    </section>
    </Layout>
  );
};

export default Mossi;
