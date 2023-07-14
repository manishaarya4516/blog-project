import React from "react";
import { SinglePageStyle } from "./singlepagestyle";
import { SinglePost } from "../../component/singlepost/singlepost";
import { Sidebar } from "../../component/sidebar/sidebar";

export const SinglePage = () => {
  return (
    <SinglePageStyle>
     <SinglePost/>
     <Sidebar/>
    </SinglePageStyle>
  );
};
