import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

import sportSvg from "../assets/images/sports.svg";

const Categories = (props: Props) => {
  return (
    <section className="py-2">
      <h2>Категорії:</h2>
      <ul className="flex flex-col gap-4 my-2">
        <li className="flex justify-center items-center cursor-pointer gap-2 bg-fuchsia-400/50 rounded-lg p-3 before:content-[''] before:bg-[url('../assets/images/cup.svg')] before:bg-cover before:bg-no-repeat  before:w-8 before:h-8 before:bg-center before:rounded-full">
          <Link href="/">Спортивні події</Link>
        </li>
        <li className="flex justify-center items-center cursor-pointer gap-2 bg-amber-400/50 rounded-lg p-3 before:content-[''] before:bg-[url('../assets/images/speak-speech-man-icon.svg')] before:bg-cover before:bg-no-repeat  before:w-8 before:h-8 before:bg-center before:rounded-full">
          <Link href="/">Політика</Link>
        </li>
        <li className="flex justify-center items-center cursor-pointer gap-2 bg-cyan-400/50 rounded-lg p-3 before:content-[''] before:bg-[url('../assets/images/earth.svg')] before:bg-cover before:bg-no-repeat  before:w-8 before:h-8 before:bg-center before:rounded-full">
          <Link href="/">Подорожі</Link>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
