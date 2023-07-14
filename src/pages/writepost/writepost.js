import React from "react";
import { WritePostStyle } from "./writepoststyle";

export const WritePost = () => {
  return (
    <WritePostStyle>
      <form className="writeform">
        <img
          src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?cs=srgb&dl=pexels-hoang-le-1042423.jpg&fm=jpg"
          alt=""
          className="writepostimg"
        />
        <div className="writeformgroup">
          <label>Title </label>
          <input type="text" placeholder="title" className="writetitle" />
          <label> description</label>
          <textarea
            typeof="text"
            placeholder="Tell your story..."
            className="writedesc"
          ></textarea>
          <input type="file"  className="writefile"/>
          <button className="writepostbtn">POST</button>
        </div>
      </form>
    </WritePostStyle>
  );
};
