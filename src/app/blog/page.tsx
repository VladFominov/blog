import RecentPosts from "@/components/RecentPosts";
import React from "react";

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <div className="text-center">
      <h1>Style Blog</h1>
      <RecentPosts />
    </div>
  );
};

export default BlogPage;
