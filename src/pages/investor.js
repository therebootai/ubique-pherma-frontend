import Head from "next/head";
import MainTemplate from "@/templates/MainTemplate";
import Banner from "@/components/global/Banner";
import InvestorPage from "@/components/InvestorPage";
export default function Investor() {
  return (
    <>
      <Head>
        <title>
          Investor | Ubique Pharma | Leading Pharmaceutical Company in India
        </title>
        <meta
          name="description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="Investor | Ubique Pharma | Leading Pharmaceutical Company in India | Quality
          Medicines & Healthcare"
        />
        <meta
          property="og:description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <InvestorPage />
      </MainTemplate>
    </>
  );
}
