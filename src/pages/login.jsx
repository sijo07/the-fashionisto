import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}
  return (
    <>
      <div className="w-full  lg:py-32 py-16 bg-gray-50">
        <div className="lg:w-3/5 mx-auto text-center">
          <div className="flex flex-col md:flex-row bg-white shadow-2xl">
            <div className="w-full h-full ">
              <div className="py-10">
                <h2 className="text-3xl font-bold capitalize text-teal-800 mb-2">
                  welcome back!
                </h2>
                <div className="border-2 w-10 border-teal-800 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
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
                <p className="text-gray-400 my-3 text-sm capitalize">
                  or enter email and password
                </p>
                <div className="flex flex-col items-center">
                  <form>
                    <div className="p-4">
                      <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        className="bg-gray-100 w-64 p-2 border-2 rounded-lg flex focus:outline-none border-blur-200"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="p-4">
                      <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        className="bg-gray-100 w-64 p-2 border-2 rounded-lg flex focus:outline-none border-blur-200"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-between w-64 pl-5 mb-5">
                      <label className="flex items-center text-xs capitalize">
                        <input
                          type="checkbox"
                          name="remember"
                          className="mr-1"
                        />
                        remember me
                      </label>
                      <a href="#" className="text-xs capitalize">
                        forget password?
                      </a>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="group my-4 bg-teal-800 text-white px-8 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer hover:scale-105 duration-200"
                    >
                      login
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5  h-full">
              <div className="bg-teal-700 lg:rounded-br-xl lg:rounded-tr-xl text-white py-8 lg:py-40 px-20">
                <h2 className="text-3xl capitalize font-bold mb-2">
                  hello, folks
                </h2>
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                <p className="capitalize">don't have an account! </p>
                <div
                  className="group flex items-center justify-center border-2 border-white rounded-full py-2 px-10 m-8 text-white  
            text-sm lg:text-sm font-bold uppercase hover:bg-white/90 hover:text-teal-950  tracking-wider cursor-pointer"
                >
                  <Link to="/signup">register</Link>
                  <span className="-rotate-90 duration-100 ease-in group-hover:rotate-90">
                    <MdExpandMore size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
