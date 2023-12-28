import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((store) => store.cart.items);
  

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="p-2 grid grid-cols-2 ml-44">
      {itemList?.map((item) => {
        return (
          <div
            className="border-2 border-black shadow-lg rounded-lg w-80 h-[325px] bg-gray-50 m-4"
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

            <button
              className="bg-red-500 p-2 rounded-lg font-semibold mx-2"
              onClick={() => {
                addToCartHandler(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
