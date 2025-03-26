import { useState } from "react";
import ProductSearch from "../ProductSearch";
import OurProductCard from "../cards/OurProductCard";
import { useProduct } from "@/store/ProductStore";

const ProductSection = () => {
  const {products} = useProduct();
  const [search, setSearch] = useState("");
  
const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
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
                <OurProductCard key={product.id} product={product} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
