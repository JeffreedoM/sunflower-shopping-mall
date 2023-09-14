import { useEffect, useState } from "react";
import Card from "./Card";
import { CartProvider } from "../contexts/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);

  // const products = [
  //   {
  //     name: "T-shirt",
  //     price: 100,
  //   },
  //   {
  //     name: "Sweater",
  //     price: 300,
  //   },
  //   {
  //     name: "Pants",
  //     price: 200,
  //   },
  //   {
  //     name: "Shoes",
  //     price: 150,
  //   },
  //   {
  //     name: "Hat",
  //     price: 50,
  //   },
  //   {
  //     name: "Jacket",
  //     price: 250,
  //   },
  // ];
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  return (
    <div className="wrapper mb-6 mt-[12vh] grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-5 lg:grid-cols-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
