import ProductDetailPage from "./ProductDetailPage.tsx";

const Mossi = () => {
  return (
    <ProductDetailPage
      title="The Mossi London Products"
      keyword="Mossi"
      category="Kujdesi per floket"
      productImages={{
        1: `${process.env.PUBLIC_URL}/partners/pictures/mossi1.jpg`,
        2: `${process.env.PUBLIC_URL}/partners/pictures/mossi2.jpg`,
        3: `${process.env.PUBLIC_URL}/partners/pictures/mossi3.jpg`,
        4: `${process.env.PUBLIC_URL}/partners/pictures/6monthset.png`,
        5: `${process.env.PUBLIC_URL}/partners/pictures/mossi5.jpg`,
      }}
    />
  );
};

export default Mossi;
