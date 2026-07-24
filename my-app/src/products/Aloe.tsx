import ProductDetailPage from "./ProductDetailPage.tsx";

const AloeVera = () => {
  return (
    <ProductDetailPage
      title="Aloe Vera Products"
      keyword="AloeVera"
      category="Kujdes natyral"
      productImages={{
        45: `${process.env.PUBLIC_URL}/partners/pictures/aloe.png`,
      }}
    />
  );
};

export default AloeVera;
