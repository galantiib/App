import ProductDetailPage from "./ProductDetailPage.tsx";

const Magnez = () => {
  return (
    <ProductDetailPage
      title="TriMagnezij Products"
      keyword="Magnez"
      category="Magnez"
      productImages={{
        40: `${process.env.PUBLIC_URL}/partners/pictures/magnez.jpg`,
      }}
    />
  );
};

export default Magnez;
