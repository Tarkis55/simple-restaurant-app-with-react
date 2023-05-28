import React from "react";
import {
  doner,
  hotDog,
  kebab,
  lahmacun,
  expensive,
  frenchFries,
} from "../assets";
import Styles from "../style";

function About() {
  return (
    <div className="flex items-center text-black flex-col font-poppins">
      <div className={`flex flex-row sm:hidden m-[20px]`}>
        <img src={hotDog} alt="" className={Styles.aboutImg} />
        <img src={doner} alt="" className={Styles.aboutImg} />
        <img src={kebab} alt="" className={Styles.aboutImg} />
        <img src={lahmacun} alt="" className={Styles.aboutImg} />
        <img src={expensive} alt="" className={Styles.aboutImg} />
        <img src={frenchFries} alt="" className={`${Styles.aboutImg}flex mr-[0]`} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className={`${Styles.heading1}flex ml-[0]`}>Tarkis restaurant</h1>
        <div className="border-t-[3px] border-t-gray-600 my-[15px] w-[100%]"></div>
        <p className="max-w-[700px] text-center">
          Exercitation est commodo ullamco culpa ut sit laborum exercitation
          laborum irure culpa esse. Consectetur eu quis consectetur nisi
          adipisicing fugiat officia labore cillum sit. Esse consequat aute
          ullamco velit ut culpa magna anim non elit velit irure ea commodo.
          Laboris id voluptate adipisicing voluptate qui do laborum commodo.
          Deserunt sit enim adipisicing culpa enim voluptate.Exercitation est
          commodo ullamco culpa ut sit laborum exercitation laborum irure culpa
          esse. Consectetur eu quis consectetur nisi adipisicing fugiat officia
          labore cillum sit. Esse consequat aute ullamco velit ut culpa magna
          anim non elit velit irure ea commodo. Laboris id voluptate adipisicing
          voluptate qui do laborum commodo. Deserunt sit enim adipisicing culpa
          enim voluptate.Exercitation est commodo ullamco culpa ut sit laborum
          exercitation laborum irure culpa esse. Consectetur eu quis consectetur
          nisi adipisicing fugiat officia labore cillum sit. Esse consequat aute
          ullamco velit ut culpa magna anim non elit velit irure ea commodo.
          Laboris id voluptate adipisicing voluptate qui do laborum commodo.
          Deserunt sit enim adipisicing culpa enim voluptate.
        </p>
      </div>
    </div>
  );
}

export default About;
