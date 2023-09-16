import { useEffect, useState } from "react";
import Card from "./Card";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="wrapper mb-6 mt-[12vh] grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-5 lg:grid-cols-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
