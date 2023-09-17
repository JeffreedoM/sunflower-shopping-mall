import { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/CartContext";

export default function Cart() {
  const { items, addQuantity, decreaseQuantity, deleteToCart } =
    useContext(CartContext);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700); // You can adjust this threshold as needed
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(items);
  if (isMobile) {
    return (
      <div className="wrapper mt-[12vh]">
        {items.length === 0 ? (
          <div className=" py-8 text-center">Cart is empty</div>
        ) : (
          items.map((item) => {
            // const { product } = item;
            return (
              <>
                <div
                  key={item.id}
                  className="relative mb-3 flex gap-3 bg-white p-3 "
                >
                  {/* Product Image */}
                  <div className="mt-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-[70px]"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="mb-3 flex flex-col gap-2 bg-white p-3 ">
                    <div className="order-1">
                      <h1>{item.title}</h1>
                    </div>
                    <div className="order-3 flex items-center gap-4">
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
                    <div className="order-2 text-red-400">
                      <p>
                        $ {(item.quantity * Math.round(item.price * 100)) / 100}
                      </p>
                    </div>
                    <div className="absolute bottom-1.5 right-2 rounded bg-red-500 px-2.5 py-2">
                      <button
                        onClick={() => deleteToCart(item.id)}
                        className="text-sm text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    );
  } else {
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
            // const { product } = item;
            return (
              <>
                <div
                  key={item.id}
                  className="mb-3 flex min-h-[110px] items-center bg-white p-3 pl-10 text-center "
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
}
