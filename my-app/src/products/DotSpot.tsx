import ProductDetailPage from "./ProductDetailPage.tsx";

const DotSpot = () => {
  return (
    <ProductDetailPage
      title="Dot Spot Products"
      keyword="DotSpot"
      category="Kujdesi i lekures"
      productImages={{
        15: `${process.env.PUBLIC_URL}/partners/pictures/dotspot.jpg`,
      }}
    />
  );
};

export default DotSpot;
