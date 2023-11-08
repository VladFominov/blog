import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  postImage: StaticImageData;
  postTitle: string;
  postText: string;
};

const Post = ({ postImage, postTitle, postText }: Props) => {
  return (
    <article>
      <div>
        <Image src={postImage} alt="фото до посту" width={528} height={352} />
      </div>
      <p>2023-08-09</p>
      <div>
        <h1>{postTitle}</h1>
        <p>{postText}</p>
        <Link href="/">Дізнатись більше</Link>
      </div>
    </article>
  );
};

export default Post;
