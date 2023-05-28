import React from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../menu/menuList";
import Styles from "../style";

function Meals() {
  const { id } = useParams();
  const menu = MenuList.find((list) => {
    return list.id === parseInt(id);
  });
  return (
    <div className="flex flex-row sm:flex-col pt-[100px] pb-[100px] font-poppins">
      <div className="flex flex-1 sm:mx-[10px] ml-[50px] h-[80vh] max-w-[100%] rounded-br-[100px] rounded-tl-[100px] bg-meals-gradient hover:shadow-2xl shadow-xl ">
        <img
          src={menu.image}
          alt=""
          className="w-[100%] max-h-[80vh] rounded-br-[100px] rounded-tl-[100px] p-[50px]"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center sm:ml-[10px] ml-[50px]">
        <h1 className={`${Styles.heading1}flex ml-[0]`}>{menu.name}</h1>
        <div className="sm:border-hidden flex justify-center border-t-[3px] border-t-gray-600 mt-[15px] w-[80%]"></div>
        <div className="text-[32px]">${menu.price}</div>
        <p className={Styles.paragpraph}>
          Et officia dolor velit aliqua Lorem ea occaecat culpa deserunt
          cupidatat nisi est. Et in id in laboris est voluptate sint labore
          mollit. Commodo nisi magna mollit veniam eiusmod enim dolor fugiat non
          culpa Lorem eu ipsum eu. Voluptate in Lorem magna et incididunt est
          velit in est et id adipisicing occaecat laborum.
        </p>
        <button className={Styles.button}>add to cart</button>
      </div>
    </div>
  );
}

export default Meals;
