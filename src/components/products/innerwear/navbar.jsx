import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Navbar = ({ handleFilterChange }) => {
  const [navigation, setNavigation] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const links = [
    {
      id: 1,
      link: "Home",
      text: "Home",
      filter: "all",
    },
    {
      id: 2,
      link: "briefs",
      text: "briefs",
      filter: "briefs",
    },
    {
      id: 3,
      link: "trunks",
      text: "trunks",
      filter: "trunks",
    },
    {
      id: 4,
      link: "boxers",
      text: "boxers",
      filter: "boxers",
    },
    {
      id: 5,
      link: "vests",
      text: "vests",
      filter: "vests",
    },
  ];

  const handleLinkClick = (filter) => {
    setSelectedFilter(filter);
    handleFilterChange(filter);
  };

  return (
    <div className="w-full h-10 z-10 top-16 lg:fixed md:fixed bg-white text-teal-950 duration-300 ease-in">
      <div className="flex justify-around items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link, text, filter }) => (
              <li
                key={id}
                className={`ml-10 text-sm font-bold uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider ${
                  selectedFilter === filter ? "" : ""
                }`}
              >
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => handleLinkClick(filter)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
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
              ? "fixed left-0 top-16 w-full h-full bg-white text-teal-950 p-10 ease-in duration-500"
              : "fixed top-16 left-[-100%] p-8 h-full ease-in duration-500 bg-white"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  westernwear
                </h2>
              </Link>
              <button
                className="fixed lg:hidden z-90 bottom-10 right-10 bg-teal-950 text-white w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-4xl border-2 border-white"
                onClick={() => setNavigation(!navigation)}
              >
                <FaAngleDoubleLeft size={25} />
              </button>
            </div>
          </div>
          <div className="mt-10 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link, text, filter }) => (
                <li
                  onClick={() => {
                    setNavigation(false);
                    handleLinkClick(filter);
                  }}
                  className="py-4 text-2xl tracking-wider cursor-pointer"
                >
                  <Link
                    key={id}
                    to={link}
                    onClick={() => {
                      handleLinkClick(filter);
                      setNavigation(!navigation);
                    }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
