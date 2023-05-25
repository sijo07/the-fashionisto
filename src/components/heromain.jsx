import React from "react";

const HeroMain = () => {
  return (
    <>
      <section className="px-3 py-28 lg:py-24  bg-white">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 pt-3">
          <div className="flex flex-col justify-center items-center">
            <h2 className="w-full text-center text-4xl font-bold md:7xl capitalize text-teal-800">
              New, Amazing
            </h2>
            <p className="w-full text-center text-4xl font-bold md:7xl capitalize text-teal-800">
              stuff is here!
            </p>
            <p className="mt-2 text-sm md:text-lg capitalize text-neutral-400 font-normal italic">
              shop today and get&nbsp;
              <span className="text-neutral-500 font-semibold not-italic lining-nums">
                30% discount
              </span>
            </p>
            <button className="rounded-r-3xl shadow shadow-black/60 bg-teal-900 hover:bg-teal-700 m-2 lg:py-2 py-1 lg:px-3.5 px-2 text-sm capitalize text-white hover:scale-105 duration-200">
              <a href="#cat_menu"> shop now</a>
            </button>
          </div>
          <div>
            <img
              className="h-80 w-80 object-cover lg:w-[100%] lg:h-[600px]"
              src="assets/cover.png"
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroMain;
