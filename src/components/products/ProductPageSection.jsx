import { useState } from "react";
import ProductPageCard from "@/components/cards/ProductPageCard";
import { useProduct } from "@/store/ProductStore";

const ProductPageSection = () => {
  const {products} = useProduct();
  const [expand, setExpand] = useState({
    tablet: true,
    capsule: true,
    syrup: true,
  });

  const toggleExpand = (category) => {
    setExpand((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categories = [
    {
      name: "tablet",
      filtered: products.filter((product) =>
        product.category.toLowerCase().includes("tablet")
      ),
    },
    {
      name: "capsule",
      filtered: products.filter((product) =>
        product.category.toLowerCase().includes("capsule")
      ),
    },
    {
      name: "syrup",
      filtered: products.filter((product) =>
        product.category.toLowerCase().includes("syrup")
      ),
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="w-full shadow-lg border-defined-brown mx-auto"
          >
            <div
              onClick={() => toggleExpand(category.name)}
              className="p-4 cursor-pointer pr-16 relative select-none"
            >
              <div className="flex justify-between">
                <h3 className="font-bold text-xl">
                  {category.name.toUpperCase()}
                </h3>
                <p className="font-bold text-2xl">
                  {expand[category.name] ? "-" : "+"}
                </p>
              </div>
            </div>
            <div
              className={`transition-[max-height] duration-500 overflow-hidden ${
                expand[category.name] ? "max-h-auto" : "max-h-0"
              }`}
            >
              <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-8 p-4">
                {category.filtered.map((product) => (
                  <ProductPageCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPageSection;
