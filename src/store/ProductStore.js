import { createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Cefixine and Olfaxine Tablet",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "tablet",
      img: "/gallery/1.jpg",
      active: true
    },
    {
      id: 2,
      name: "Pantropazole gastro resistant",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "capsule",
      img: "/gallery/2.jpg",
      active: true
    },
    {
      id: 3,
      name: "Olfaxine and Orindazole",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "tablet",
      img: "/gallery/3.jpg",
      active: true
    },
    {
      id: 4,
      name: "Vitamin B-complex with L-Lysine",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "syrup",
      img: "/gallery/4.jpg",
      active: true
    },
    {
      id: 5,
      name: "Ucozyme",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "syrup",
      img: "/gallery/5.jpg",
      active: true
    },
    {
      id: 6,
      name: "Arythromycin with Lactic Acid",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "tablet",
      img: "/gallery/6.jpg",
      active: true
    },
    {
      id: 7,
      name: "Cetrizine Dihydrocholoride",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "syrup",
      img: "/gallery/7.jpg",
      active: true
    },
    {
      id: 8,
      name: "Levosalbutamol Guaiphenesin",
      packageSize: "10 x 10",
      mrp: "55.65",
      ptr: "40",
      category: "syrup",
      img: "/gallery/8.jpg",
      active: true
    },
  ];
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

