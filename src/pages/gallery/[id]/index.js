import Head from "next/head";
import Banner from "@/components/global/Banner";
import MainTemplate from "@/templates/MainTemplate";
import { useRouter } from "next/router";

export default function FacilityPage() {
  const router = useRouter();
  if (
    router.query.id === "events" ||
    router.query.id === "ads"
  ) {
    return (
      <>
        <Head>
          <title>
            Mfg. Facility | Ubique Pharma | Leading Pharmaceutical Company in
            India
          </title>
          <meta
            name="description"
            content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
          />
          <meta name="keywords" content="about, company, values, team" />
          <meta
            property="og:title"
            content="Mfg. Facility | Ubique Pharma | Leading Pharmaceutical Company in India | Quality
          Medicines & Healthcare"
          />
          <meta
            property="og:description"
            content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
          />
        </Head>
        <MainTemplate>
          <Banner />
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="text-4xl font-bold text-defined-brown">
              Coming Soon...
            </h1>
          </div>
        </MainTemplate>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>
          Mfg. Facility | Ubique Pharma | Leading Pharmaceutical Company in
          India
        </title>
        <meta
          name="description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="Mfg. Facility | Ubique Pharma | Leading Pharmaceutical Company in India | Quality
          Medicines & Healthcare"
        />
        <meta
          property="og:description"
          content="Ubig Pharma is a trusted pharmaceutical company in India, committed to delivering high-quality medicines and healthcare solutions. Explore our wide range of innovative and affordable pharmaceutical products for a healthier future."
        />
      </Head>
      <MainTemplate>
      </MainTemplate>
    </>
  );
}
