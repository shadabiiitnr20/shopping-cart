import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../utils/cartSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const cartItemsList = useSelector((store) => store.cart.cartItems);
  const totalItems = useSelector((store) => store.cart.totalItemsCount);

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItemsList]);

  return (
    <nav className="bg-red-500 w-screen p-2 h-14 flex justify-around shadow-lg">
      <Link to="/">
        <h2 className="text-xl font-semibold p-2 hover:cursor-pointer">
          Cart-RTK
        </h2>
      </Link>
      <Link to="/cart">
        <button className="bg-black w-16 text-lg rounded-lg text-white p-1">
          🛒: {totalItems}
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
