import MainTemplate from "@/templates/MainTemplate";
import Banner from "@/components/global/Banner";
import ProductDetails from "../../../components/products/ProductDetails";

const Product = () => {
  return (
    <MainTemplate>
      <Banner />
      <ProductDetails />
    </MainTemplate>
  )
}

export default Product