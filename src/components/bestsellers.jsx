import React from "react";
import { FcLike } from "react-icons/fc";
import { MdExpandMore } from "react-icons/md";

const BestSellers = () => {
  const sellers = [
    {
      id: 1,
      brand: "Stop",
      desc: "Solid Cotton Regular Fit Men's Sweatshirts",
      cap: "#best seller",
      src: "assets/products/sweatshirts/Stop.jpg",
    },
    {
      id: 2,
      brand: "EYEWEARLABS",
      desc: "UV-Protected Polarised Square Sunglasses",
      cap: "#best seller",
      src: "assets/products/sunglasses/EYEWEARLABS_2.jpg",
    },
    {
      id: 3,
      brand: "DANIEL KLEIN",
      desc: "DK11599-4 Water-Resistant Analogue Watch",
      cap: "#best seller",
      src: "assets/products/watches/DANIEL_KLEIN.jpg",
    },
    {
      id: 4,
      brand: "Jack And Jones",
      desc: "JFW Fang Leather Lace Up Mens Boots",
      cap: "#best seller",
      src: "assets/products/boots/j&j.jpg",
    },
  ];
  return (
    <>
      <div id="shirts" className="w-full lg:py-20 py-9">
        <div className="group flex items-center justify-center h-10 bg-teal-950 text-1xl lg:text-2xl  text-white  font-bold uppercase tracking-wider">
          #featured products
          <span className="lg:-rotate-90 duration-100 ease-in group-hover:rotate-0">
            <MdExpandMore size={40} />
          </span>
        </div>
        <div className="max-w-screen-xl mx-auto px-8 lg:py-20 py-8 text-center md:text-left">
          <div className="grid lg:grid-cols-4 gap-8">
            {sellers.map(({ id, brand, desc, cap, src }) => (
              <div
                id={id}
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
                    <p className="text-sm font-semibold text-gray-600 my-3">
                      {cap}
                    </p>
                    <div className="ml-auto p ">
                      <FcLike size={25} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
