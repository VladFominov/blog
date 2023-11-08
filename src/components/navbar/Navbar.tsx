"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

import headerIcon from "../../assets/images/ukraine.png";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import BurgerMenu from "../BurgerMenu";

type Props = {};

const Navbar = (props: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-1">
        <Image src={headerIcon} alt="Лого" width={40} height={40}></Image>
        <ThemeToggle />
      </div>
      <div className="tablet:hidden">
        {isClicked ? (
          <BurgerMenu onClick={() => setIsClicked(false)} />
        ) : (
          <div className="tablet:hidden cursor-pointer">
            <button type="button" onClick={() => setIsClicked(true)}>
              <FaHamburger size={30} className="text-yellow-400  " />
            </button>
          </div>
        )}
      </div>
      <nav className="hidden tablet:flex justify-between items-center gap-3 ">
        <div>
          <Link className="block uppercase" href="/">
            Домашня
          </Link>
        </div>
        <div>
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

export default Navbar;
