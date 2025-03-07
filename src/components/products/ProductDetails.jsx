import { useProduct } from "@/store/ProductStore";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import TradeFormCard from "../cards/TradeFormCard";
const ProductDetails = () => {
  const { selectedProduct } = useProduct();
   const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !formData.name ||
        !formData.mobile ||
        !formData.quantity ||
        !formData.email ||
        !formData.purpose ||
        !formData.location ||
        !formData.message
      ) {
        alert("Please fill all the fields");
        return;
      }

      if (formData.mobile.length !== 10) {
        alert("Please enter a valid mobile number");
        return;
      }

      const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

      let message = `*Name:* ${formData.name}
    *Mobile:* ${formData.mobile}
    *Quantity:* ${formData.quantity}
    *Email:* ${formData.email}
    *Purpose:* ${formData.purpose}
    *Location:* ${formData.location}
    *Message:* ${formData.message}`;
      message = encodeURIComponent(message);

      const dest = "+918617501527";
      const baseUrl = isMobile
        ? "https://api.whatsapp.com/send"
        : "https://web.whatsapp.com/send";

      const url = `${baseUrl}?phone=${dest}&text=${message}`;
      window.open(url, "_blank").focus();
    };
  
  const toggleBookingModal = () => {
      setIsModalOpen((prev) => !prev);
    };
  
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
  
  const content = [
    { desc: selectedProduct?.productPrice, heading: "MRP" },
    {
      desc:
        selectedProduct?.productpts === "" ? "NA" : selectedProduct?.productpts,
      heading: "PTS",
    },
    { desc: selectedProduct?.productptr, heading: "PTR" },
    { desc: selectedProduct?.packagingsizeName, heading: "Pack Size" },
  ];
  return (
    <section>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
          {/* Left */}
          <div className="w-full md:w-[40%]">
            <Image
              src={selectedProduct?.productImage.secure_url}
              alt="products"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 w-full md:w-[60%] p-4">
            <h1 className="text-defined-blue text-2xl font-semibold">
              {selectedProduct?.brandName}
            </h1>

            <div className="w-full h-full border flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-[40%] border">
                {content.map((item, index) => (
                  <div key={index} className="border p-2">
                    <h1 className="text-defined-brown text-xl font-semibold">
                      {item.heading}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="w-full md:w-1/2 lg:w-[60%] border">
                {content.map((item, index) => (
                  <div key={index} className="border p-2">
                    <p className="text-defined-brown text-xl">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 p-2 text-white">
              <button className="w-1/2 md:w-[25%] bg-defined-green p-2 rounded-md">
                <a href="tel:+918617501527">Request to Call</a>
              </button>
              <button
                className="w-1/2 md:w-[25%] bg-defined-orange p-2 rounded-md"
                onClick={toggleBookingModal}
              >
                  Send Enquiry
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex p-8 gap-4 flex-col">
          <h1 className="text-defined-brown text-2xl font-semibold">
            Product Details
          </h1>
          <div className="border w-full h-auto flex flex-col p-4">
            <h1 className="ext-defined-brown text-2xl font-semibold text-center">
              Brand Name : {selectedProduct?.brandName}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-8 p-8 text-lg">
              <p>Category : {selectedProduct?.categoryName}</p>
              <p>
                Description :{" "}
                {selectedProduct?.moleculeAndStrengthName.map((molecule) => {
                  return (
                    <span>
                      {molecule.moleculeName} {molecule.strengthName},{" "}
                    </span>
                  );
                })}
              </p>
              <p>Product Price : {selectedProduct?.productPrice}</p>
              <p>Pack Size: {selectedProduct?.packagingsizeName}</p>
              <p>PTR: {selectedProduct?.productptr}</p>
              <p>
                PTS :{" "}
                {selectedProduct?.productpts === ""
                  ? "NA"
                  : selectedProduct?.productpts}{" "}
              </p>
              <p
                className={`${
                  selectedProduct?.active ? "text-green-600" : "text-red-600"
                }`}
              >
                Status :{" "}
                {selectedProduct?.active ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
            <div
              ref={modalRef}
              className="w-full sm:w-[90%] md:w-[50%] max-w-md p-6 rounded-lg relative "
            >
              <TradeFormCard closeModal={closeModal} />
            </div>
          </div>
        )}

        {/* form */}
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-defined-blue text-2xl font-semibold text-center">
            Looking For Medicine
          </h1>
          <div className="w-full h-auto relative">
            <Image
              src={"/images/enq-form.png"}
              alt="enq-form"
              width={500}
              height={500}
              className="w-full h-[40rem] object-cover rounded"
            />

            <div className="absolute inset-0 w-full h-full bg-defined-blue opacity-30"></div>

            <div className="absolute inset-0 w-full h-auto flex flex-col gap-2">
              <form onSubmit={handleSubmit} className="w-[90%] mx-auto py-4 md:py-16 flex flex-col md:gap-8 gap-2">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Mobile No."
                    name="mobile"
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email Id"
                    name="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Purpose"
                    name="purpose"
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full md:w-1/2 p-3 md:p-4 rounded"
                  />
                </div>
                <textarea
                  name="message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  id=""
                  rows={"4"}
                  placeholder="Message"
                  className="w-full p-3 md:p-4 rounded"
                />
                <button type="submit" className="bg-defined-orange text-white p-4 rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
