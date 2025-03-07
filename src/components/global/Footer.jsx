import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
// import CustomerFormCard from "../cards/CustomerFormCard";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Career", path: "/career" },
    { name: "Investor", path: "/investor" },
    { name: "Marketing", path: "/marketing" },
    { name: "Contact Us", path: "/contact" },
  ];

  const quickLinks2 = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Vision", path: "/about" },
    { name: "Our Product", path: "/products" },
    { name: "CSR", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <footer className="relative w-full p-6 lg:p-8 border-t-4 border-defined-orange">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-defined-blue"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-4 w-full lg:w-[40%]">
              <Image src="/logo-white.png" alt="logo" width={186} height={52} />
              <div className="text-base lg:text-sm text-white">
                <div className="flex items-center gap-2">
                  <FaWhatsapp />
                  <Link href={"https://wa.me/918617501527"}>
                    <span>+91 86175 01527</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobile />
                  <Link href={"tel:918617501527"}>
                    <span>+91 86175 01527, 0356 1358188</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <Link href={"mailto:info@ubiquepharma.com"}>
                    <span>info@ubiquepharma.com</span>
                  </Link>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <IoLocationSharp className="text-lg" />
                  <span>
                    Solanipuram, Civil Line, Roorkee-247667 (UK) India RO:
                    Papiva Para. Dabaram-II. Siliguri-734006. (WB) India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-[35%] lg:flex-row">
              {/* Quick Links */}
              <div className="w-1/2">
                <h1 className="font-bold">Quick Links</h1>
                <ul className="text-white text-sm">
                  {quickLinks.map((item, index) => (
                    <li key={index} className="py-1">
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="w-1/2">
                <h1 className="font-bold">Quick Links</h1>
                <ul className="text-white text-sm">
                  {quickLinks2.map((item, index) => (
                    <li key={index} className="py-1">
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section (Image Fix) */}
            <div className="w-full h-full lg:w-[30%] relative z-20">
              <Image
                src={"/images/contact.png"}
                alt="enq-form"
                width={500}
                height={500}
                className="w-full h-[12rem] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-defined-gray w-full my-4" />
        <div className="text-sm text-white flex flex-col md:flex-row justify-between items-center">
          <h1>
            © 2025{" "}
            <span className="hover:underline">
              <Link href="/"> Ubique Pharma</Link>
            </span>{" "}
            - All Rights Reserved
          </h1>
          <h1>
            Design & Developed By:{" "}
            <span className="font-semibold">
              <a
                target="_blank"
                href="https://rebootai.in/"
                className="hover:underline"
              >
                Reboot AI Pvt. Ltd.
              </a>
            </span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
