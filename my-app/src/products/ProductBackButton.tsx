import { useNavigate } from "react-router-dom";

const ProductBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="product-back-button"
      onClick={() => navigate("/products")}
    >
      ← Produktet
    </button>
  );
};

export default ProductBackButton;
