import { useEffect, useState } from "react";
import { Layout } from "../Layout.tsx";

interface Product {
  id: number;
  name: string;
  description: string;
  components: string;
  price: number;
}

const Imuno = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productImages: Record<number, string> = {
    22: "/partners/pictures/imuno.png",
    23: "/partners/pictures/imunokapsula.png",
    24: "/partners/pictures/imunosirup.png",
  };

  useEffect(() => {
    const fetchImunoBoosterProducts = async () => {
      try {
        const response = await fetch(
          "https://localhost:7132/api/products/by-name?keyword=Imuno"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch ImunoBooster products");
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

    fetchImunoBoosterProducts();
  }, []);

  if (loading) {
    return <p>Loading Imuno Booster products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout>
      <section className="section1">
        <div>
          <h1 className="allh1">Imuno Super Booster Products</h1>

          {products.length === 0 && <p>No products found.</p>}

          <div style={{ display: "grid", gap: "16px" }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "16px",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img
                  src={
                    productImages[product.id] ||
                    "/partners/pictures/default.png"
                  }
                  alt={product.name}
                  style={{
                    width: "300px",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />

                <div>
                  <h3 className="allh3">{product.name}</h3>
                  <p>{product.description}</p>
                  <p>
                    <strong>Components:</strong> {product.components}
                  </p>
                  <p>
                    <strong>Price:</strong> {product.price.toFixed(2)} €
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Imuno;
