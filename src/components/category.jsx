import React from "react";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div id="cat_menu" className="w-full lg:py-10">
        <div className="group flex items-center justify-center h-10 bg-teal-950 my-8 text-1xl lg:text-2xl  text-white  font-bold uppercase tracking-wider">
          shop with us
          <span className="lg:-rotate-90 duration-100 ease-in group-hover:rotate-0">
            <MdExpandMore size={40} />
          </span>
        </div>
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:black/30 transition-shadow">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
                  src="assets/western_cover.webp"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%] group-hover:translate-y-0 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white uppercase m-10">
                  westernwear
                </h1>
                <p className="text-lg italic text-white capitalize mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  get the best deals!
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-teal-900 py-2 px-3.5 text-sm capitalize text-white">
                  <Link to="westernwear"> shop now</Link>
                </button>
              </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:black/30 transition-shadow">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
                  src="assets/footwear_cover.webp"
                  alt="footwear"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%] group-hover:translate-y-0 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white uppercase m-10">
                  footwear
                </h1>
                <p className="text-lg italic text-white capitalize mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  get the best deals!
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-teal-900 py-2 px-3.5 text-sm capitalize text-white">
                  <Link to="footwear"> shop now</Link>
                </button>
              </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:black/30 transition-shadow">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
                  src="assets/inner_cover.jpg"
                  alt="innerwear"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%] group-hover:translate-y-0 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white uppercase m-10">
                  innerwear
                </h1>
                <p className="text-lg italic text-white capitalize mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  get the best deals!
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-teal-900 py-2 px-3.5 text-sm capitalize text-white">
                  <Link to="innerwear"> shop now</Link>
                </button>
              </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:black/30 transition-shadow">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
                  src="assets/acc_cover.jpg"
                  alt="accessories"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%] group-hover:translate-y-0 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white uppercase m-10">
                  accessories
                </h1>
                <p className="text-lg italic text-white capitalize mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  get the best deals!
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-teal-900 py-2 px-3.5 text-sm capitalize text-white">
                  <Link to="accessories"> shop now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
