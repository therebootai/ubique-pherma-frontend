import Image from "next/image";
import { useRouter } from "next/router";
// import TradeFormCard from "./TradeFormCard";
import { useCallback, useEffect, useRef, useState } from "react";

const OurProductCard = ({product}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const router = useRouter();
      const handleViewMore = () => {
        sessionStorage.setItem("selectedProduct", JSON.stringify(product));
        router.push(`/products/${product.id}`);
      };

        // const toggleBookingModal = () => {
        //   setIsModalOpen(true);
        // };
      
        const closeModal = useCallback(() => {
          setIsModalOpen(false);
        }, []);
      
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
              closeModal();
            }
          };
      
          if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
          }
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [isModalOpen, closeModal]);
      
  return (
    <div className="w-[19rem] h-auto flex flex-col justify-between flex-grow gap-2 border shadow-lg rounded group">
      <div className="relative w-full h-auto">
        <Image
          src={product.img}
          alt="products"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white p-4">
          <h1 className="font-semibold text-xl">{product.name}</h1>
          <p>Pack Size : {product.packageName}</p>
          <p>MRP:{product.mrp}</p>
          <p>PTR: {product.ptr}</p>
          <p>Product Type: {product.category}</p>
        </div>
      </div>
      <h1 className="text-defined-brown font-semibold text-center">
        {product.name}
      </h1>
      <div className="flex gap-2 p-2">
        <button
          className="w-1/2 bg-defined-blue p-2 rounded-md"
          onClick={handleViewMore}
        >
          Enquiry Now
        </button>
        <button
          className="w-1/2 bg-defined-orange p-2 rounded-md"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
      {/* {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="w-full sm:w-[90%] md:w-[50%] max-w-md p-6 rounded-lg relative"
          >
            <TradeFormCard closeModal={closeModal} />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default OurProductCard