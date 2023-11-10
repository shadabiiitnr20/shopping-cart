import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  getTotal,
} from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cartItemsList = useSelector((store) => store.cart.cartItems);
  const totalItems = useSelector((store) => store.cart.totalItemsCount);
  const totalAmount = useSelector((store) => store.cart.totalItemsAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
    if (cartItemsList.length === 0) {
      navigate("/");
    }
  }, [cartItemsList]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const increaseItemCountHandler = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const decreaseItemCountHandler = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  // console.log("cart component reloaded");

  return (
    <div>
      <div className="m-2 p-2">
        <h2>Total Amount: {totalAmount}</h2>
        <h2>Total Items: {totalItems}</h2>
      </div>
      <div className="flex">
        {cartItemsList?.map((item) => {
          return (
            <div
              className="border-2 border-black shadow-lg rounded-lg w-80 h-fit bg-gray-50 m-4"
              key={item?.id}
            >
              <img
                alt={item?.title}
                src={item?.img}
                className="w-48 mx-auto my-2 text-center shadow-xl"
              />
              <hr />
              <div className="p-2 flex justify-between">
                <h2 className="text-md font-semibold">Name: {item?.title}</h2>
                <h2 className="text-md font-semibold">Price: ${item?.price}</h2>
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="bg-red-500 p-2 rounded-lg font-semibold mx-2"
                  onClick={() => increaseItemCountHandler(item.id)}
                >
                  +
                </button>
                <h2 className="text-md font-semibold mx-2">
                  Quantity: {item?.quantity}
                </h2>
                <button
                  className={`bg-red-500 p-2 rounded-lg font-semibold mx-2 ${
                    item.quantity >= 1 ? "block" : "hidden"
                  }`}
                  onClick={() => decreaseItemCountHandler(item.id)}
                >
                  -
                </button>
              </div>
              <button
                className="bg-red-500 p-2 rounded-lg font-semibold mx-2 my-2"
                onClick={() => {
                  removeFromCartHandler(item.id);
                }}
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
