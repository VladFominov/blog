import Categories from "@/components/Categories";
import Editors from "@/components/Editors";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <RecentPosts />
      <Editors />
    </main>
  );
}
