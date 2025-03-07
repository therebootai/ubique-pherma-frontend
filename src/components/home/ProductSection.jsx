import { useState } from "react";
import ProductSearch from "../ProductSearch";
import OurProductCard from "../cards/OurProductCard";

const ProductSection = ({ products }) => {
  const [search, setSearch] = useState("");
  console.log(products);
  
const filteredProducts = products.filter((product) => product.brandName.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredProducts);
    
  return (
    <section>
      <div className="w-full flex flex-col gap-4">
        <ProductSearch
          setSearch={(value) => {
            console.log("Search value:", value); // ✅ Log search updates
            setSearch(value);
          }}
        />

        {/* Products */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-defined-brown text-4xl font-semibold">
            Our Products
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 p-8">
            {filteredProducts?.map((product) => {
              return (
                <OurProductCard key={product.productId} product={product} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
