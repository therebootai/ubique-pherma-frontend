import Head from "next/head";

import MainTemplate from "@/templates/MainTemplate";
import AboutSection from "../components/home/AboutSection";
import ProductSection from "../components/home/ProductSection";
import EnquiryFormSection from "@/components/home/EnquiryFormSection";
import ProductCategorySection from "../components/home/ProductCategorySection";
import HomeSlider from "../components/home/HomeSlider";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>
          Ubique Pharma | Leading Pharmaceutical Company in India | Quality
          Medicines & Healthcare
        </title>
        <meta
          name="description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="Home | Ubique Pharma | Leading Pharmaceutical Company in India | Quality
          Medicines & Healthcare"
        />
        <meta
          property="og:description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
      </Head>
      <MainTemplate>
        <HomeSlider />
        <ProductCategorySection products={products} />
        <AboutSection />
        <ProductSection products={products} />
        <EnquiryFormSection />
      </MainTemplate>
    </>
  );
}

export const getServerSideProps = async () => {
  const products = await (
    await fetch("https://ubiquephermabackend.vercel.app/api/products/get")
  ).json();
  const limitedProducts = products.data.slice(0, 8);
  return {
    props: {
      products: limitedProducts, // limit 8
    },
  };
};
