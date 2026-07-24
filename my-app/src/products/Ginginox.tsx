import ProductDetailPage from "./ProductDetailPage.tsx";

const Ginginox = () => {
  return (
    <ProductDetailPage
      title="Ginginox Products"
      keyword="Ginginox"
      category="Kujdesi oral"
      productImages={{
        25: `${process.env.PUBLIC_URL}/partners/pictures/ging1.jpg`,
        27: `${process.env.PUBLIC_URL}/partners/pictures/ginginoxgel.png`,
      }}
    />
  );
};

export default Ginginox;
