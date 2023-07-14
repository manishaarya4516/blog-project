import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/homepage";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Navbar } from "../component/navbar/navbar";
import { Sidebar } from "../component/sidebar/sidebar";
import { Posts } from "../pages/posts/posts";
import { WritePost } from "../pages/writepost/writepost";
import {Settings} from "../pages/settings/settings"
import { Header } from "../component/header/header";
import { SinglePage } from "../pages/singlepage/singlepage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <HomePage />
            </>
          }
        />
         <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
         <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
         <Route
          path="/posts"
          element={
            <>
              <Posts />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Sidebar />
            </>
          }
        />
         <Route
          path="/write"
          element={
            <>
              <WritePost />
            </>
          }
        />
         <Route
          path="/setting"
          element={
            <>
              <Settings />
            </>
          }
        />
         <Route
          path="/header"
          element={
            <>
              <Header />
            </>
          }
        />
         <Route
          path="/post/:postId"
          element={
            <>
              <SinglePage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
