import React from "react";
import { MenuList } from "../menu/menuList";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="w-[100%] h-auto flex justify-center items-center flex-col">
      <h1 className=" text-[48px] font-poppins uppercase">Tarkis menu</h1>

      <div className="w-[70vw] grid h-auto md:grid-cols-1 lg:grid-cols-3 place-items-center">
        {MenuList.map((list, key) => {
          return (
            <Link to={`/menu/${list.id}`}>
              <MenuItem
                id={key}
                image={list.image}
                name={list.name}
                price={list.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
