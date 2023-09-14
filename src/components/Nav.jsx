import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Nav() {
  const { items } = useContext(CartContext);
  return (
    <nav className="fixed top-0 z-10 flex h-[10vh] w-full items-center bg-orange-200 font-semibold">
      <div className="wrapper flex items-center justify-between">
        <h1 className="text-lg">
          <Link to="/">Sunflower Shopping Mall</Link>
        </h1>

        <div>
          <Link to="/cart">
            Cart {items.length === 0 ? "" : `( ${items.length} )`}
          </Link>
        </div>
      </div>
    </nav>
  );
}
