import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function Card({ product }) {
  const { title, price, image } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="relative flex w-full cursor-pointer flex-col rounded-md border-2 border-transparent bg-white p-2 text-sm hover:border-orange-300 md:text-base ">
      <div className="flex h-full max-h-[300px] items-center justify-center">
        <img src={image} alt="" className="max-h-[200px] w-auto" />
      </div>
      <div className="mt-3 flex min-h-[95px] flex-col justify-between gap-3">
        <h1 className="line-clamp-2" title={title}>
          {title}
        </h1>
        <div className="mt-auto flex justify-between">
          <p className="block text-red-400">${price}</p>
          <button onClick={() => addToCart({ product })}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
