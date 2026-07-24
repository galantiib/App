import ProductDetailPage from "./ProductDetailPage.tsx";

const Forvax = () => {
  return (
    <ProductDetailPage
      title="Forvax C Products"
      keyword="Forvax"
      category="Kujdesi i veshit"
      productImages={{
        50: `${process.env.PUBLIC_URL}/partners/pictures/forvax.jpg`,
      }}
    />
  );
};

export default Forvax;
