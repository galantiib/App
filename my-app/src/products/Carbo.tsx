import ProductDetailPage from "./ProductDetailPage.tsx";

const Carbo = () => {
  return (
    <ProductDetailPage
      title="CarboSil Products"
      keyword="CarboSil"
      category="Kujdesi tretes"
      productImages={{
        12: `${process.env.PUBLIC_URL}/partners/pictures/carbogranula.png`,
      }}
    />
  );
};

export default Carbo;
