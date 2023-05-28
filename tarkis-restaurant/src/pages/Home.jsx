import React from "react";
import { Link } from "react-router-dom";
import Styles from "../style";

function Home() {
  return (
    <div className="flex sm:flex-col flex-row pt-[70px] h-[90vh] bg-cover bg-center w-[100%] text-black font-poppins bg-pizza bg-no-repeat">
      <div className="flex sm:bottom-0 items-center justify-center flex-1/3 flex-col absoulte p-[20px] m-[20px] sm:text-white sm:h-[350px] sm:w-[550px] sm:bg-black  sm:rounded-[20px]">
        <div className=" sm:border-hidden flex justify-center border-t-[3px] border-t-gray-200 mt-[15px] w-[100%]"></div>
        <h1 className={`${Styles.heading1} flex font-semibold ml-[0]`}>
          Tarkis Restaurant
        </h1>
        <p className="uppercase text-[40px]">meals for any taste</p>
        <Link to="/menu">
          <button className={Styles.button2}>ORDER NOW</button>
        </Link>
        <div className=" sm:border-hidden flex justify-center border-t-[3px] border-t-gray-200 mt-[15px] w-[100%]"></div>
      </div>
    </div>
  );
}

export default Home;
