import React from "react";
import { HeaderStyle } from "./headerstyle";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="headertitle">
        <h1 className="headertitleblog">BLOGS</h1>
      </div>
      <img
        src="https://www.esri.com/arcgis-blog/wp-content/uploads/2023/06/Blog-art-thumb.jpg"
        alt="headerimg"
        className="headerimage"
      />
    </HeaderStyle>
  );
};
