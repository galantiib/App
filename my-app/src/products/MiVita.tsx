import ProductDetailPage from "./ProductDetailPage.tsx";

const MiVita = () => {
  return (
    <ProductDetailPage
      title="MiVita Products"
      keyword="MiVita"
      category="Mireqenie"
      productImages={{
        33: `${process.env.PUBLIC_URL}/partners/pictures/mivita.jpg`,
      }}
    />
  );
};

export default MiVita;
