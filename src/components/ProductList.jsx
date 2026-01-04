import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products";

const ProductList = ({ addToCart }) => {
  const [sort, setSort] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchInput]);

  let filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="controls">
        <input
          type="text"
          placeholder="Search product..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
