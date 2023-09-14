import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function Cart() {
  const { items, addQuantity, decreaseQuantity, deleteToCart } =
    useContext(CartContext);

  return (
    <div className="wrapper mt-[12vh]">
      <div className="mb-3 flex items-center bg-white p-3 pl-10 text-center">
        <div className="w-[40%] text-left">Product</div>
        <div className="w-[15%]">Unit Price</div>
        <div className="w-[15%]">Quantity</div>
        <div className="w-[15%]">Total Price</div>
        <div className="w-[15%]">Action</div>
      </div>
      {items.length === 0 ? (
        <div className=" py-8 text-center">Cart is empty</div>
      ) : (
        items.map((item) => {
          const { product } = item;
          return (
            <>
              <div
                key={item.id}
                className="mb-3 flex items-center bg-white p-3 pl-10 text-center "
              >
                <div className="flex w-[40%] items-center gap-3 text-left">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-[70px]"
                  />
                  <h1>{item.title}</h1>
                </div>
                <div className="w-[15%]">
                  <p>$ {item.price}</p>
                </div>
                <div className="flex w-[15%] items-center justify-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded bg-gray-200 px-3 py-1 text-lg font-bold"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => addQuantity(item.id)}
                    className="rounded bg-gray-200 px-3 py-1 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
                <div className="w-[15%]">
                  <p>
                    $ {(item.quantity * Math.round(item.price * 100)) / 100}
                  </p>
                </div>
                <div className="w-[15%]">
                  <button
                    onClick={() => deleteToCart(item.id)}
                    className="text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
}
