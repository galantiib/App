import { useEffect, useState } from "react";
import { Layout } from "../Layout.tsx";
import { apiBaseUrl } from "../config.ts";
import ProductBackButton from "./ProductBackButton.tsx";

interface Product {
  id: number;
  name: string;
  description: string;
  components: string;
  price: number;
}

interface ProductDetailPageProps {
  title: string;
  keyword: string;
  productImages: Record<number, string>;
  category?: string;
}

const fallbackImage = `${process.env.PUBLIC_URL}/ozzo.png`;

const ProductDetailPage = ({
  title,
  keyword,
  productImages,
  category = "Produktet",
}: ProductDetailPageProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 12000);

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${apiBaseUrl}/api/products/by-name?keyword=${encodeURIComponent(
            keyword
          )}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch ${title}`);
        }

        const data: Product[] = await response.json();
        if (isActive) {
          setProducts(data);
        }
      } catch (err) {
        if (isActive) {
          setError("Something went wrong while loading products.");
        }
        console.error(err);
      } finally {
        window.clearTimeout(timeoutId);
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isActive = false;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [keyword, title]);

  return (
    <Layout>
      <section className="product-detail-page">
        <ProductBackButton />

        <div className="product-detail-hero">
          <div>
            <span className="eyebrow">{category}</span>
            <h1 className="allh1">{title}</h1>
            <p>
              Informacionet kryesore, perberesit dhe cmimet jane organizuar ne
              nje format te qarte katalogu.
            </p>
          </div>

          {!loading && !error && (
            <div className="product-detail-summary" aria-label="Product count">
              <strong>{String(products.length).padStart(2, "0")}</strong>
              <span>Produkte te listuara</span>
            </div>
          )}
        </div>

        {loading && (
          <div className="product-status">Duke ngarkuar {title.toLowerCase()}...</div>
        )}

        {error && <div className="product-status product-status-error">{error}</div>}

        {!loading && !error && products.length === 0 && (
          <div className="product-status">Nuk u gjeten produkte.</div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="product-list" aria-label={`${title} list`}>
            {products.map((product, index) => (
              <article className="product-detail-card" key={product.id}>
                <div className="product-image-shell">
                  <img
                    src={productImages[product.id] || fallbackImage}
                    alt={product.name}
                  />
                </div>

                <div className="product-detail-copy">
                  <span className="product-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="allh3">{product.name}</h2>
                  <p>{product.description}</p>

                  <dl className="product-facts">
                    <div>
                      <dt>Perberesit</dt>
                      <dd>{product.components}</dd>
                    </div>
                    <div>
                      <dt>Cmimi</dt>
                      <dd>{product.price.toFixed(2)} EUR</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductDetailPage;
