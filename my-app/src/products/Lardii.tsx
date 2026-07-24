import ProductDetailPage from "./ProductDetailPage.tsx";

const Lardii = () => {
  return (
    <ProductDetailPage
      title="Boulardii Family Products"
      keyword="Boulardii"
      category="Suplement ushqimor probiotik"
      productImages={{
        48: `${process.env.PUBLIC_URL}/partners/pictures/lardii.jpg`,
      }}
    />
  );
};

export default Lardii;
