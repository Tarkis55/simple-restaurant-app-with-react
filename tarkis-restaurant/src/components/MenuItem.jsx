import React from "react";


function MenuItem({ image, name, price }) {
  return (
    <div className="flex flex-col rounded-[15px] w-[300px] h-[350px] m-[20px] menuItem shadow-sm border-[3px]">
      <div
        className="bg-center w-[100%] h-[200px] bg-no-repeat bg-cover rounded-tl-[15px] rounded-br-[15px] "
        style={{ backgroundImage: `url(${image})` }}
      >
        {" "}
      </div>
      <h1 className="flex justify-center font-semibold text-[24px] items-center">
        {name}
      </h1>
      <p className="flex justify-center text-[18px] items-center">${price}</p>
    </div>
  );
}

export default MenuItem;
