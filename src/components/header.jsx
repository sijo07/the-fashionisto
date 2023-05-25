import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";

const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const [pagescroll, setPageScroll] = useState(false);
  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );
    return sub;
  }, []);
  return (
    <>
      <div
        className={`w-full  z-10 fixed bg-white text-black duration-300 ease-in ${
          pagescroll && "shadow-lg"
        }`}
      >
        <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
          <Link to="/">
            <img
              src="assets/logo.png"
              alt="The Fashionisto"
              className="w-auto h-5 lg:w-auto lg:h-10"
            />
          </Link>
          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                <Link to="/">
                  <BsFillHouseDoorFill />
                </Link>
              </li>
              <li className="ml-10 cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                <Link to="login">
                  <FaUserAlt />
                </Link>
              </li>
              <li className="ml-10 cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                <Link to="contact">
                  <FaPhoneAlt size={15} />
                </Link>
              </li>
            </ul>

            {!navigation && (
              <button
                className="text-3xl md:hidden cursor-pointer"
                onClick={() => setNavigation(true)}
              >
                &#9776;
              </button>
            )}
          </div>
        </div>
        <div
          className={
            navigation
              ? "md:hidden fixed left-0 top-0 w-full bg-black/70 backdrop-blue-blur"
              : ""
          }
        >
          <div
            className={
              navigation
                ? "fixed left-0 top-0 w-full h-full   bg-white p-10 ease-in duration-500"
                : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500 bg-white"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/#home">
                  <img
                    onClick={() => setNavigation(false)}
                    className="w-auto h-5 tracking-wider cursor-pointer"
                    src="assets/logo.png"
                  />
                </Link>
                <button
                  onClick={() => setNavigation(false)}
                  className="text-6xl  cursor-pointer  pb-1"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="flex flex-col min-h-screen items-center m-10">
              <ul className="uppercase">
                <li
                  onClick={() => setNavigation(false)}
                  className="w-full text-center  py-6 hover:opacity-90 tracking-wider cursor-pointer text-3xl font-medium"
                >
                  <Link to="/">home</Link>
                </li>
                <li
                  onClick={() => setNavigation(false)}
                  className="w-full text-center  py-6 hover:opacity-90 tracking-wider cursor-pointer text-3xl font-medium"
                >
                  <Link to="login">profile</Link>
                </li>
                <li
                  onClick={() => setNavigation(false)}
                  className="w-full text-center  py-6 hover:opacity-90 tracking-wider cursor-pointer text-3xl font-medium"
                >
                  <Link to="contact"> contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
