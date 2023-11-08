import Image from "next/image";
import React from "react";
import Link from "next/link";

import heroImage from "../assets/images/ukraine_malta.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-2">
      <article>
        <h1>
          У вівторок, 17 жовтня, збірна України перемогла у гостях Мальту в
          кваліфікації Євро-2024.
        </h1>
        <div className="my-2">
          <div>
            <Image src={heroImage} alt="Зображення посту" />
          </div>
          <div>
            <div>
              <p>
                Збірна України невдало розпочала гру в Та-Калі та пропустила на
                12-й хвилині від Пола Мбонга. Команда Сергія Реброва перехопила
                ініціативу наприкінці першого тайму та пішла на перерву ведучи в
                рахунку.
              </p>
            </div>
            <div className="my-2">
              <Link href="/">Дізнатись більше</Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
