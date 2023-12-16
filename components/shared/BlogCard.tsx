import { PostTypes } from "@/types/postTypes";
import React from "react";

export default function LatestPost({ post }: { post: PostTypes[] }) {
  console.log(post);

  return (
    <div>
      {/* <div><img src={post.image_path} /></div> */}
    </div>
  );
}
