import React from "react";
import { sosicalmedia } from "../menu/menuList";

<div className="border-t-[3px] border-t-black w-full mb-[20px]"></div>;

function Footer() {
  return (
    <div className="flex items-center justify-center flex-col w-[full] h-[200px] bg-black z-20">
      <div className=" flex  flex-row cursor-pointer">
        {sosicalmedia.map((social, index) => (
          <img
            key={social.id}
            src={social.image}
            onClick={() => window.open(social.link)}
            className={`flex w-[70px] h-[70px] my-[10px]  object-contain cursor-pointer ${
              index !== sosicalmedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          ></img>
        ))}
      </div>

      <p className="text-white text-[24px]"> &copy; 2023 Tarkis pizza</p>
    </div>
  );
}

export default Footer;
