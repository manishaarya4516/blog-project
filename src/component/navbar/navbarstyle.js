import { styled } from "styled-components";

export const NavbarStyle= styled.div`
 width: 100%;
  height: 50px;
  background-color: aquamarine;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  .nav {
    display: flex;
    flex: 9;
  }
  .nav-left,
  .nav-right {
    /* border: 1px solid black; */
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: center;
  }
  .nav-logo {
    margin: 0;
    width: 50%;
    height: 50px;
    cursor: pointer;
  }
  .nav-center {
    flex: 6;
    display: flex;
    align-items: center;
  }
  .navlist {
    display: flex;
    justify-items: center;
    align-items: center;
    list-style: none;
    margin: 0;
    margin-left: 50px;
    gap: 10px;
  }
  .navlist a{
    text-decoration: none;
    color: inherit;

  }
  .navlistitem {
    font-size: 20px;
    font-weight: 300px;
    margin-right: 20px;
    cursor: pointer;
  }
  .top-img {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    cursor: pointer;
    object-fit: cover;
  }
`