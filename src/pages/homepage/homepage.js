/* eslint-disable no-unused-vars */
import React from "react";
import { HomePageStyle } from "./homepagestyle";
import { Header } from "../../component/header/header";
import { Posts } from "../posts/posts";
import { Sidebar } from "../../component/sidebar/sidebar";

export const HomePage = () => {
  return (
    <HomePageStyle>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </HomePageStyle>
  );
};
