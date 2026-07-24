import ProductDetailPage from "./ProductDetailPage.tsx";

const Bronho = () => {
  return (
    <ProductDetailPage
      title="BronhoMax Products"
      keyword="BronhoMax"
      category="Respirator"
      productImages={{
        6: `${process.env.PUBLIC_URL}/partners/pictures/surup1.png`,
        7: `${process.env.PUBLIC_URL}/partners/pictures/surupkids.png`,
      }}
    />
  );
};

export default Bronho;
