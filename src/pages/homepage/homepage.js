/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { HomePageStyle } from "./homepagestyle";
import { Header } from "../../component/header/header";
import { Sidebar } from "../../component/sidebar/sidebar";
import { Posts } from "../posts/posts";

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
