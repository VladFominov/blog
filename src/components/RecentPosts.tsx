import React from "react";
import Post from "./Post";

type Props = {};
import img from "../assets/images/ukraine_malta.jpg";
import Pagination from "./Pagination";
const RecentPosts = (props: Props) => {
  return (
    <section className="py-2">
      <Post
        postImage={img}
        postTitle=" У вівторок, 17 жовтня, збірна України перемогла у гостях Мальту в
          кваліфікації Євро-2024."
        postText="  Збірна України невдало розпочала гру в Та-Калі та пропустила на
                12-й хвилині від Пола Мбонга. Команда Сергія Реброва перехопила
                ініціативу наприкінці першого тайму та пішла на перерву ведучи в
                рахунку."
      />
      <Pagination />
    </section>
  );
};

export default RecentPosts;
