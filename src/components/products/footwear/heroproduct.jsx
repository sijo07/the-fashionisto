import React from "react";

const HeroProduct = () => {
  return (
    <>
      <section className="px-3 lg:py-20 py-14 pl  bg-white">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 pt-3">
          <div className="flex flex-col justify-center items-center">
            <h2 className="w-full text-center text-4xl font-bold md:7xl capitalize text-teal-800">
              introducing our
            </h2>
            <p className="w-full text-center text-4xl font-bold md:7xl capitalize text-teal-800">
              most comfortable fashion!
            </p>
            <span className="mt-2 text-sm md:text-lg capitalize text-neutral-500 font-semibold lining-nums">
              for up to 70% off.
            </span>
          </div>
          <div>
            <img
              className="h-70 w-70 object-cover lg:w-[100%] lg:h-[600px]"
              src="assets/shoe_banner.png"
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProduct;
