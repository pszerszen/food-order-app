import {useContext} from "react";
import Cart         from "./components/Cart/Cart";
import Header       from "./components/Layout/Header";
import Meals        from "./components/Meals/Meals";
import CartContext  from "./context/cart-context";

function App() {
  const {cartVisible} = useContext(CartContext);
  return (
      <>
        {cartVisible && <Cart/>}
        <Header/>
        <main><Meals/></main>
      </>
  );
}

export default App;
