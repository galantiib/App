import ProductDetailPage from "./ProductDetailPage.tsx";

const Total = () => {
  return (
    <ProductDetailPage
      title="Prenatal Total Products"
      keyword="Prenatal"
      category="Suplement ushqimor prenatal"
      productImages={{
        49: `${process.env.PUBLIC_URL}/partners/pictures/total.jpg`,
      }}
    />
  );
};

export default Total;
