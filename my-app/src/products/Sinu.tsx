import ProductDetailPage from "./ProductDetailPage.tsx";

const Sinu = () => {
  return (
    <ProductDetailPage
      title="SinuSil Products"
      keyword="Sinu"
      category="Mbeshtetje per sistemin respirator dhe sinuset"
      productImages={{
        47: `${process.env.PUBLIC_URL}/partners/pictures/sinu.jpg`,
      }}
    />
  );
};

export default Sinu;
