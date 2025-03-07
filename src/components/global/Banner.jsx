import Image from "next/image";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  const pageData = {
    "/contact": "Contact Us",
    "/about": "About Us",
    "/career": "Career",
    "/investor": "Investor",
    "/marketing": "Marketing",
    "/products": "Our Products",
  };


  const mfgTitles = {
    "track-order": "Track Your Order",
    "product-approval": "Product Approval List",
    customer: "Customer",
  };

  let title = pageData[router.pathname] || "Page";

  if (router.pathname.startsWith("/mfg-facility/[facility]")) {
    const facility = router.query.facility; 
    title = mfgTitles[facility] || "Mfg. Facility";
  }

  if (router.pathname.startsWith("/products/")) {
    title = "Our Products";
  }

  return (
    <div className="w-full h-[10rem] relative">
      <Image
        src="/banner.jpg"
        alt="product form"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 flex justify-center items-center flex-col text-white z-10">
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
