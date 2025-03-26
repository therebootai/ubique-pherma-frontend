import Header from "../components/global/Header";
import TopHeader from "../components/global/TopHeader";
import Footer from "../components/global/Footer";
import { IoLogoWhatsapp } from "react-icons/io";

const MainTemplate = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="z-[1000] w-full">
        <TopHeader />
        <Header />
      </div>

      <div className="flex-1 lg:mt-[5rem] md:mt-[5rem] mt-[4rem]">
        {children}
      </div>

      {/* WhatsApp Button */}
      <div
        className="fixed bottom-14 right-8 z-[1100]"
        onClick={() => window.open("https://wa.me/918617501527", "_blank")}
      >
        <div className="group flex items-center">
          <div className="bg-defined-green text-white w-[3rem] h-[3rem] flex items-center rounded-full shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[10rem]">
            <IoLogoWhatsapp size={30} className="ml-2 flex-shrink-0" />
            <span className="opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300 whitespace-nowrap">
              WhatsApp
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainTemplate;
