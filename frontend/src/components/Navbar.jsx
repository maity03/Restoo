import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <BiRestaurant size={32} />
            <h1 className="text-xl font-semibold">Restoooo</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy
              smooth
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="dishes"
                  spy
                  smooth
                  duration={500}
                  className="hover:text-brightColor cursor-pointer"
                >
                  Dishes
                </Link>
                <BiChevronDown size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5 z-40">
                {["Spicy", "Tasty", "Delicious", "Crispy"].map((item) => (
                  <li key={item}>
                    <Link
                      to="dishes"
                      spy
                      smooth
                      duration={500}
                      className="text-gray-800 hover:text-brightColor"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="about"
              spy
              smooth
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              About
            </Link>

            <Link
              to="menu"
              spy
              smooth
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="review"
              spy
              smooth
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Reviews
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90"
            >
              Login
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {["home", "dishes", "about", "menu", "review"].map((item) => (
            <Link
              key={item}
              to={item}
              spy
              smooth
              duration={500}
              className="hover:text-brightColor cursor-pointer"
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <button
            onClick={() => {
              setShowModal(true);
              closeMenu();
            }}
            className="mx-auto px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90"
          >
            Login
          </button>
        </div>

        {/* Login/Register Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-[400px] rounded-2xl p-6 shadow-lg relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
              >
                <AiOutlineClose size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text">
                {isLogin ? "Login to Restoooo" : "Register for Restoooo"}
              </h2>

              <form className="flex flex-col gap-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 rounded-lg bg-gray-100 outline-none text-sm"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-lg bg-gray-100 outline-none text-sm"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 rounded-lg bg-gray-100 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90"
                >
                  {isLogin ? "Login" : "Register"}
                </button>
              </form>

              <p className="text-sm text-center text-gray-600 mt-4">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  className="text-brightColor font-medium cursor-pointer"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Register" : "Login"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
