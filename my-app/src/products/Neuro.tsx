import ProductDetailPage from "./ProductDetailPage.tsx";

const Neuro = () => {
  return (
    <ProductDetailPage
      title="Neurospin Products"
      keyword="Neurospin"
      category="Mbeshtetje nervore"
      productImages={{
        36: `${process.env.PUBLIC_URL}/partners/pictures/neuro.jpg`,
      }}
    />
  );
};

export default Neuro;
