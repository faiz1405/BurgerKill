import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
      console.log(window.scrollY);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      // onScroll={changeColor}
      className={
        color
          ? "max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 z-40 bg-white shadow-lg"
          : "max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 z-40 shadow-lg"
      }
    >
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={() => setNav(!nav)} size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Burger <span className="font-bold">Kill</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 px-2 flex items-center rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="p-2 focus:outline-none bg-transparent  "
          type="text"
          placeholder="Search food"
        />
      </div>

      {/* Card Button */}
      <button className="hidden md:flex rounded-full bg-black text-white py-2 ">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile Button */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "bg-white fixed h-screen top-0 left-0 w-[300px] z-10 duration-300"
            : "bg-white fixed h-screen top-0 left-[-100%] w-[300px] z-10 duration-1000"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Burger <span className="font-bold">Kill</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4">
            <li className="flex items-center text-xl py-4">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="flex items-center text-xl py-4">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="flex items-center text-xl py-4">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="flex items-center text-xl py-4">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="flex items-center text-xl py-4">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="flex items-center text-xl py-4">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="flex items-center text-xl py-4">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friend
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
