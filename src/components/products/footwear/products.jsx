import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
import Products from "./data/products.json";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Product = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const filteredProducts =
    selectedFilter === "all"
      ? Products
      : Products.filter(({ type }) => type === selectedFilter);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
    });
    return total;
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = calculateTotal();

  const checkout = () => {
    console.log("Checkout clicked!");
  };

  return (
    <>
      <div className="w-full pb-20">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid lg:grid-cols-4 gap-20">
            <Navbar handleFilterChange={handleFilterChange} />
            {filteredProducts.map(({ id, brand, desc, price, del, src }) => (
              <div
                key={id}
                className="bg-white shadow-md lg:hover:scale-105 duration-300"
              >
                <div className="px-4 py-3 w-72">
                  <img
                    className="w-72 h-72 object-cover"
                    src={src}
                    alt="westernwear"
                  />
                </div>
                <div className="px-4 py-3">
                  <h2 className="text-gray-400 uppercase text-sm">{brand}</h2>
                  <p className="w-60 text-xs font-bold block truncate capitalize">
                    {desc}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3 lining-nums">
                      &#8377;&nbsp;{price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">{del}</p>
                    </del>
                    <div className="ml-auto">
                      <FcPlus
                        size={25}
                        onClick={() =>
                          addToCart({ id, brand, desc, price, del, src })
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showCart && (
        <div className="fixed  lg:top-26 top-16 py-10 w-[100%] h-[100%] lg:w-[350px] bg-white p-4 shadow overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Cart Items:</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center">
                <img
                  className="w-16 h-16 object-cover rounded mr-4"
                  src={item.src}
                  alt={item.brand}
                />
                <div>
                  <p className="font-bold">{item.brand}</p>
                  <p className="text-sm">{item.desc}</p>
                  <p>&#8377; {item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 mr-2"
                >
                  Delete
                </button>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-teal-950 text-white px-2 py-1 rounded-full mr-2"
                  >
                    -
                  </button>
                  {item.quantity > 0 ? <p>{item.quantity}</p> : <p>0</p>}
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-teal-950 text-white px-2 py-1 rounded-full ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300 mt-4 pt-4">
            <p className="text-lg font-bold">Total Quantity: {totalQuantity}</p>
            <p className="text-lg font-bold">
              Total Amount: &#8377; {totalPrice}
            </p>
            <button
              onClick={() => checkout()}
              className="bg-teal-950 text-white px-3 py-2 rounded-full"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <button
        onClick={toggleCart}
        className="fixed bottom-24 lg:bottom-10 right-10 bg-teal-950 text-white w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-4xl border-2 border-white"
      >
        <FaShoppingBag size={17} />
      </button>
    </>
  );
};

export default Product;
