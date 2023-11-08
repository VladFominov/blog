"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import { ThemeContext } from "@/context/ThemeContext";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className="relative flex justify-between items-center w-10 h-5 cursor-pointer rounded-full bg-black "
      onClick={toggle}
      style={
        theme === "dark" ? { background: "white" } : { background: "black" }
      }
    >
      <div>
        <BiMoon className="text-yellow-400" />
      </div>
      <div
        className="bg-white w-3.5 h-3.5 rounded-full absolute"
        style={
          theme === "dark"
            ? { left: "1px", background: "black" }
            : { right: "1px", background: "white" }
        }
      ></div>
      <div>
        <BiSun className="text-yellow-400" />
      </div>
    </div>
  );
};

export default ThemeToggle;
