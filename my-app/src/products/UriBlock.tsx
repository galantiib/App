import ProductDetailPage from "./ProductDetailPage.tsx";

const UriBlock = () => {
  return (
    <ProductDetailPage
      title="UriBlock Products"
      keyword="UriBlock"
      category="Kujdesi urinar"
      productImages={{
        42: `${process.env.PUBLIC_URL}/partners/pictures/uri1.jpg`,
        43: `${process.env.PUBLIC_URL}/partners/pictures/uri2.jpg`,
      }}
    />
  );
};

export default UriBlock;
