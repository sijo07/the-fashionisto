import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-[500px]">
        <div className=" bg-teal-950 text-white">
          <h2 className="font-bold text-2xl lg:text-3xl p-10 text-center">
            Special Offer <br />
            Flat 50% Discount for All Brands shirts.
          </h2>
          <div className="max-w-screen-xl mx-auto text-center md:text-left">
            <div className="grid lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <h4 className="text-2xl pt-2 font-bold capitalize cursor-pointer  tracking-wider">
                  Useful links
                </h4>
                <ul>
                  <li className="p-2 text-1lg font-semibold uppercase text-gray-400 hover:text-white  cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="p-2 text-1lg font-semibold uppercase text-gray-400 hover:text-white cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="westernwear">westernwear</Link>
                  </li>
                  <li className=" p-2 text-1lg font-semibold uppercase text-gray-400 hover:text-white cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="footwear">footwear</Link>
                  </li>
                  <li className=" p-2 text-1lg font-semibold uppercase text-gray-400 hover:text-white  cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="innerwear">innerwear</Link>
                  </li>
                  <li className="p-2 text-1lg font-semibold uppercase text-gray-400 hover:text-white  cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="accessories">accessories</Link>
                  </li>
                  <li className="p-2 text-1lg font-semibold uppercase text-gray-400 hover:text-white cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="contact">contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="text-2xl pt-2 font-bold capitalize cursor-pointer  tracking-wider">
                  information
                </h4>
                <ul>
                  <li className="pt-3 text-1lg font-semibold uppercase text-gray-400 hover:text-white cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">term & conditions</Link>
                  </li>
                  <li className="pt-3 text-1lg font-semibold uppercase text-gray-400 hover:text-white  cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">delivery terms</Link>
                  </li>
                  <li className="pt-3 text-1lg font-semibold text-gray-400 hover:text-white uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">order tracking</Link>
                  </li>
                  <li className="pt-3 text-1lg font-semibold text-gray-400 hover:text-white uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">return policy</Link>
                  </li>
                  <li className="pt-3 text-1lg font-semibold text-gray-400 hover:text-white uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">privacy policy</Link>
                  </li>
                  <li className="pt-3 text-1lg font-semibold text-gray-400 hover:text-white uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    <Link to="/">faq</Link>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="text-2xl pt-2 font-bold capitalize cursor-pointer  tracking-wider">
                  contact
                </h4>
                <p className="text-1lg pt-2  font-semibold capitalize text-gray-400 cursor-pointer  tracking-wider hover:text-white">
                  <a href="tel:+91 9876543210"> +(91) 987 654 3210</a>
                </p>
                <p className="text-1lg pt-2 font-semibold  cursor-pointer  text-gray-400 tracking-wider hover:text-white">
                  <a href="mailto: thefashionisto@gmail.com">
                    thefashionisto@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-5">
                <h4 className="text-2xl pt-2 font-bold capitalize cursor-pointer lg:pl-8  tracking-wider">
                  newsletter
                </h4>
                <p className="text-gray-400 my-3 lg:pl-8 text-sm capitalize">
                  Shop Exclusive Promos & SAVE 70% <br />
                  on Your First Order
                </p>
                <div className="flex flex-col items-center">
                  <form>
                    <label className="flex items-center text-xs capitalize">
                      <input
                        type="email"
                        placeholder="Email"
                        className="bg-gray-100 w-64 p-2 border-2 rounded-lg text-black flex focus:outline-none border-blur-200"
                        required
                      />
                    </label>
                    <button
                      onClick="submit"
                      className="group my-4 bg-teal-800 text-white px-8 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer hover:scale-105 duration-200"
                    >
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-teal-950 text-white py-6">
          <div className="flex justify-center pt-5 lg:pt-0">
            <a
              href="#"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaGoogle />
            </a>
            <a
              href="#"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-center pt-5 text-gray-400 text-sm capitalize">
            Copyright &#169;2023 All rights reserved | @the_fashionisto,com
          </div>
        </div>
        <div />
      </footer>
    </>
  );
};

export default Footer;
