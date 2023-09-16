import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Products from "./components/Products";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
