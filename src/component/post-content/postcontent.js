import React from "react";
import { PostContentStyle } from "./postcontentstyle";

export const PostContent = () => {
  return (
    <PostContentStyle>
      <div className="postcontent">
        <img
          src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?cs=srgb&dl=pexels-hoang-le-1042423.jpg&fm=jpg"
          alt=""
          className="postcontentimg"
        />
        <div className="postinfo">
          <div className="postcategory">
            <span className="postcatlist">music</span>
            <span className="postcatlist">travel</span>
          </div>
          <span className="posttitle">
            Nature, in the broadest sense, is the physical world or universe.
          </span>
          <hr />
        </div>
        <p className="postdesc">
          Within the various uses of the word today, "nature" often refers to
          geology and wildlife. Nature can refer to the general realm of living
          plants and animals, and in some cases to the processes associated with
          inanimate objects
        </p>
        <span className="post-time"> 1 hr ago</span>
      </div>
    </PostContentStyle>
  );
};
