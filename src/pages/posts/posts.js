import React from "react";
import { PostStyle } from "./poststyle";
import { PostContent } from "../../component/post-content/postcontent";

export const Posts = () => {
  return (
    <PostStyle >
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
    </PostStyle>
  );
};
