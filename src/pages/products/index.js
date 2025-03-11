import Head from "next/head";
import MainTemplate from "@/templates/MainTemplate";
import Banner from "@/components/global/Banner";
import ProductPageSection from "../../components/products/ProductPageSection";
const Products = ({products}) => {
  return (
    <>
      <Head>
        <title>
          Products | Ubique Pharma | Leading Pharmaceutical Company in India
        </title>
        <meta
          name="description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="Products | Ubique Pharma | Leading Pharmaceutical Company in India | Quality
          Medicines & Healthcare"
        />
        <meta
          property="og:description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <ProductPageSection products={products} />
      </MainTemplate>
    </>
  );
}

export const getStaticProps = async () => {
  const products = await (
    await fetch("https://ubiquephermabackend.vercel.app/api/products/get")
  ).json();
  return {
    props: {
      products,
    },
  };
};

export default Products;