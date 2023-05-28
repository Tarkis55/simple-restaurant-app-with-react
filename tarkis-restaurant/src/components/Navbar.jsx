import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { Link } from "react-router-dom";
import Styles from "../style";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-1 flex-row justify-between bg-black w-full">
      <div className=" p-[10px] flex-1">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="ml-[50px] w-[130px] h-[50px] my-[10px]"
          />
        </Link>
      </div>

      <div className="flex-row flex text-white uppercase mx-[60px] my-[20px]">
        <Link to="/" className="mx-[10px]">
          <div className={Styles.navbarBtn}>Home</div>
        </Link>
        <Link to="/menu" className="mx-[10px]">
          <div className={Styles.navbarBtn}>Menu</div>
        </Link>
        <Link to="/about" className="mx-[10px]">
          <div className={Styles.navbarBtn}>About</div>
        </Link>
        <Link to="/contact" className="mx-[10px]">
          <div className={Styles.navbarBtn}>Contact</div>
        </Link>
        <div className="sm:flex hidden flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="flex list-none flex-col justify-end items-start flex-1">
              <Link to="/" className="hover:text-[24px]">
                Home
              </Link>
              <Link to="/menu" className="hover:text-[24px]">
                menu
              </Link>
              <Link to="/about" className="hover:text-[24px]">
                about
              </Link>
              <Link to="/contact" className="hover:text-[24px]">
                contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
