import ProductDetailPage from "./ProductDetailPage.tsx";

const Rexidro = () => {
  return (
    <ProductDetailPage
      title="RexidroSol Products"
      keyword="Rexidro"
      category="Hidratim"
      productImages={{
        39: `${process.env.PUBLIC_URL}/partners/pictures/rexidro.png`,
      }}
    />
  );
};

export default Rexidro;
