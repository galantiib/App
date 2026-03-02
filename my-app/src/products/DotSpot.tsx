import { useEffect, useState } from "react";
import { Layout } from "../Layout.tsx";

interface Product {
  id: number;
  name: string;
  description: string;
  components: string;
  price: number;
}

const DotSpot = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDotSpotProducts = async () => {
      try {
        const response = await fetch(
          "https://localhost:7132/api/products/by-name?keyword=DotSpot"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch DotSpot products");
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

    fetchDotSpotProducts();
  }, []);

  if (loading) {
    return <p>Loading DotSpot products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout>
    <section className="section1">
    <div>
      <h1>DotSpot  Products</h1>

      {products.length === 0 && <p>No products found.</p>}

      <div style={{ display: "grid", gap: "16px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              borderRadius: "8px",
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
          </div>
        ))}
      </div>
    </div>
    </section>
    </Layout>
  );
};

export default DotSpot;
