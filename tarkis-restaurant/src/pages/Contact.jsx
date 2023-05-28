import React from "react";
import { left } from "../assets";
import Styles from "../style";

function Contact() {
  return (
    <div className="flex sm:flex-col flex-row items-center font-poppins">
      <div className="flex sm:hidden flex-1 max-w-[50%] max-h-[110vh]">
        <img src={left} alt="" className="flex" />
      </div>
      <div className="flex flex-1 ml-[50px] flex-col">
        <h1 className={Styles.heading1}>
          contact with us
        </h1>
        <div className="flex sm:ml-[5%] sm:w-[80%] justify-center border-t-[3px] border-t-gray-600 mt-[15px] w-[90%]"></div>
        <input
          type="text"
          placeholder="Name*"
          className="flex h-[36px] sm:w-[60%] w-[30%] outline-none mt-[10px] mb-[10px] border-b-[3px]"
        />
        <input
          type="text"
          placeholder="GSM*"
          className="flex h-[36px] sm:w-[60%] w-[30%] outline-none mb-[10px] border-b-[3px]"
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          className="flex h-[36px] sm:w-[60%] w-[30%] outline-none mb-[10px] border-b-[3px]"
        /><input
        type="message"
        placeholder="Message*"
        className="flex h-[120px] sm:w-[90%] w-[90%] outline-none mb-[10px] border-b-[3px]"
      />
        <button
          className={Styles.button2}
        >
          Get contact
        </button>
      </div>
    </div>
  );
}

export default Contact;
