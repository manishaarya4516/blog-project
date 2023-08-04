/* eslint-disable no-unused-vars */
import React from "react";
import { SinglePostStyle } from "./singlepoststyle";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
// import { PostContent } from "../post-content/postcontent";

export const SinglePost = () => {
  return (
    <SinglePostStyle>
      <div className="singlepostwrapper">
        <img
          src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?cs=srgb&dl=pexels-hoang-le-1042423.jpg&fm=jpg"
          alt=""
          className="singlepostimg"
        />
        <h3 className="singleposttitle">
          Nature, in the broadest sense, is the physical world or universe.
          <div className="singlepostedit">
          <EditFilled  className="singleposticon" style={{color:"teal"}}/>
          <DeleteFilled  className="singleposticon" style={{color:"tomato"}}/>
        </div>
        </h3>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author:<b>manish</b>
          </span>
          <span className="singlepostdate">1 hr ago</span>
        </div>
       
        <p className="singlepostdesc">
          Within the various uses of the word today, "nature" often refers to
          geology and wildlife. Nature can refer to the general realm of living
          plants and animals, and in some cases to the processes associated with
          inanimate objects
          Within the various uses of the word today, "nature" often refers to
          geology and wildlife. Nature can refer to the general realm of living
          plants and animals, and in some cases to the processes associated with
          inanimate 
          Within the various uses of the word today, "nature" often refers to
          geology and wildlife. Nature can refer to the general realm of living
          plants and animals, and in some cases to the processes associated with
          inanimate objects
        </p>

       
       
      </div>
    </SinglePostStyle>
  );
};
