import React, { useState } from "react";
import { WritePostStyle } from "./writepoststyle";

export const WritePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState([]);

  const AddPost = () => {
    if (!title || !description) {
      return;
    }

    const newPost = {
      title: title,
      description: description,
    };
    setPost([...post, newPost]);
    setTitle("");
    setDescription("");
    
  };

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
          <input
            type="text"
            placeholder="title"
            className="writetitle"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> description</label>
          <textarea
            typeof="text"
            placeholder="Tell your story..."
            className="writedesc"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="file" className="writefile" />
          <button className="writepostbtn" onClick={AddPost}>
            POST
          </button>
        </div>
      </form>
    </WritePostStyle>
  );
};
