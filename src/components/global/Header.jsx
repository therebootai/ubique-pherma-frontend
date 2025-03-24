"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import TradeFormCard from "../cards/TradeFormCard";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "/products",
      dropdown: [
        { name: "Tablet", path: "/products" },
        { name: "Capsule", path: "/products" },
        { name: "Syrup", path: "/products" },
      ],
    },
    {
      name: "Mfg. Facility",
      path: "/",
      dropdown: [
        {
          name: "Manufacturing Service",
          path: "/mfg-facility/manufacturing-service",
        },
        {
          name: "Product Approval List",
          path: "/mfg-facility/product-approval",
        },
        { name: "Track Your Order", path: "/mfg-facility/track-order" },
      ],
    },
    { name: "Career", path: "/career" },
    { name: "Investor", path: "/investor" },
    {
      name: "Gallery",
      path: "/gallery",
      dropdown: [
        { name: "Visual Ads", path: "/gallery/ads" },
        {
          name: "Events",
          path: "/gallery/events",
        },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBookingModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div
        className={`flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[4.5rem] md:h-[5rem] w-full z-[60] bg-white shadow-md ${
          scrolled ? "top-0" : "md:top-[3rem] top-0"
        }`}
      >
        <Link href={"/"}>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-5 lg:items-center font-semibold lg:text-sm text-base relative uppercase">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.dropdown ? index : null)}
            >
              <Link
                href={item.path}
                className="px-2 hover:text-blue-500 cursor-pointer"
              >
                {item.name}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && openDropdown === index && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 top-full bg-white shadow-md rounded-md w-52 mt-2 transition-opacity duration-300"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.path}
                      className="block px-4 py-2 text-black hover:text-blue-500 hover:bg-gray-100 transition cursor-pointer"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-5">
          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-md transition-all duration-700 font-semibold hover:bg-green-700 cursor-pointer"
          >
            Trade Enquiry
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl ml-auto mr-3 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col p-5 gap-4 transition-all duration-300 transform ${
            isOpen
              ? "opacity-85 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.path}
                onClick={toggleMenu}
                className="hover:text-blue-500 cursor-pointer"
              >
                {item.name}
              </Link>

              {/* Mobile Dropdown */}
              {item.dropdown && (
                <div className="flex flex-col gap-2 mt-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.path}
                      className="ml-4 block px-4 py-2 text-white rounded-md hover:text-blue-500 hover:bg-gray-100 transition cursor-pointer"
                      onClick={toggleMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-full w-full transition-all duration-300 font-semibold hover:bg-gray-800 cursor-pointer"
          >
            Trade Enquiry
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="w-full sm:w-[90%] md:w-[50%] max-w-md p-6 rounded-lg relative"
          >
            <TradeFormCard closeModal={closeModal} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
