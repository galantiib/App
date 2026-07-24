import ProductDetailPage from "./ProductDetailPage.tsx";

const Flexo = () => {
  return (
    <ProductDetailPage
      title="Flexo Products"
      keyword="Flexo"
      category="Mbeshtetje per nyjet"
      productImages={{
        17: `${process.env.PUBLIC_URL}/partners/pictures/flexo1.jpg`,
        18: `${process.env.PUBLIC_URL}/partners/pictures/flexogranula.png`,
      }}
    />
  );
};

export default Flexo;
