import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import { decreaseItem, increaseItem, removeItem } from "../Redux/cartSlice";

const Cart = () => {
  const cartLength = useSelector((state) => state.totalQuantity);
  const cartItems = useSelector((state) => state.cartList);
  const [OrdersValue, setOrdersValue] = useState(0);
  const dispatcher = useDispatch();
  console.log(cartItems, "Hello");
  const getTotalQuantity = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
      setOrdersValue(total);
      if (cartLength === 0) {
        setOrdersValue(0);
      }
    });
  };

  useEffect(() => {
    getTotalQuantity();
  }, [cartItems]);

  return (
    <>
      <div className="w-full min-h-screen   px-16 bg-red-500 pb-16 pt-4">
        <div>
          <h1 className="text-5xl py-2 text-center font-semibold uppercase  font-serif text-white">
            Cart
          </h1>
        </div>
        <div className="flex">
          {/* left  */}

          <div className=" w-1/2 flex flex-col   space-y-5 ">
            {cartItems.map((e, id) => (
              <div
                className="shadow-xl inset-0 px-8 py-6 flex rounded-lg justify-between bg-white"
                key={id}
              >
                <div className="flex space-x-4">
                  <img src={e.img} alt="itemImage" className="w-36" />
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-600 font-medium text-lg ">
                      Name: {e.name}
                    </p>
                    <p className="text-gray-600 font-medium text-lg">
                      Price: {e.price}
                    </p>
                    <p className="text-gray-600 font-medium text-lg">
                      Quantity: {e.quantity}
                    </p>
                    <p className="text-gray-600 font-medium text-lg">
                      Total: {e.totalPrice}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <button
                    className="font-bold bg-red-600 hover:bg-red-700 text-white px-6 py-2  flex justify-center items-center rounded-full"
                    onClick={() => dispatcher(increaseItem(e))}
                  >
                    <AiOutlinePlus fontSize="large" />
                  </button>
                  <button
                    className="font-bold bg-red-600  hover:bg-red-700 text-white px-6 py-2   flex justify-center items-center  rounded-full"
                    onClick={() => dispatcher(decreaseItem(e))}
                  >
                    <RiSubtractFill fontSize="large" />
                  </button>
                  <button
                    className="font-bold bg-red-600  hover:bg-red-700 text-white px-6 py-2  rounded-full"
                    onClick={() => dispatcher(removeItem(e))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="w-1/2 block fixed right-0 top-15   space-y-4  px-16  ">
            <div className="  shadow-2xl bg-white rounded-lg p-8">
              <p className="text-4xl  font-bold ">Checkout</p>

              {cartItems.map((e, id) => (
                <>
                  <div className="flex justify-between">
                    <p className="py-2 font-serif tracking-wider uppercase">
                      {e.name}{" "}
                    </p>
                    <p className="font-serif text-lg">x{e.quantity}</p>
                  </div>
                  <hr />
                </>
              ))}
              <div className="flex justify-between py-5">
                <p className="font-serif text-xl ">
                  Orders x
                  <span className="font-sans text-xl  ">{cartLength}</span>{" "}
                </p>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-white px-4 py-2 rounded-lg font-bold">
                  Place Order
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
