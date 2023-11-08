import React from "react";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import AuthLinks from "./authLinks/AuthLinks";

type Props = {
  onClick: () => void;
};

const BurgerMenu = ({ onClick }: Props) => {
  return (
    <div className="flex flex-col  p-2 absolute top-0 right-0 transition delay-75 ease-in-out z-10 w-3/4 h-screen bg-blue-300 rounded-tl-3xl">
      <div className=" cursor-pointer ml-auto mb-3">
        <button type="button" onClick={onClick}>
          <FaWindowClose size={35} className="text-yellow-400 tablet:hidden " />
        </button>
      </div>
      <nav>
        <div>
          <Link className="block uppercase" href="/">
            Домашня
          </Link>
          <Link className="block uppercase my-3 " href="/">
            Про проект
          </Link>
        </div>
        <div>
          <AuthLinks />
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
