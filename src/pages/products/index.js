import MainTemplate from "@/templates/MainTemplate";
import Banner from "@/components/global/Banner";
import ProductPageSection from "../../components/products/ProductPageSection";
const Products = ({products}) => {
  return (
    <MainTemplate>
      <Banner />
      <ProductPageSection products={products}/>
    </MainTemplate>
  )
}

export const getServerSideProps = async () => {
  const products = await (await fetch(
    "https://ubiquephermabackend.vercel.app/api/products/get"
  )).json();
  return {
    props: {
      products,
    },
  };
};

export default Products;