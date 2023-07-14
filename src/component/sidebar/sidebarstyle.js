import { styled } from "styled-components";

export const SidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: fit-content;
  align-items: center;
  background-color: #e7ede1;
  border-radius: 10px;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sidebartitle {
    margin: 10px;
    padding: 10px;
    align-items: center;
    border-top: 1px solid brown;
    border-bottom: 1px solid brown;
    font-size: 20px;
    font-weight: 500;
    color: blue;
  }
  .sidebarimg {
    height: 200px;
    width: 100%;
  }
  .sidebar > p {
    padding: 10px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 18px;
  }
  .sidebaritem {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  .sidebarlist {
    list-style: none;
    cursor: pointer;
    color: darkmagenta;
  }
  .sidebarlistitem {
    display: inline-block;
    width: 20%;
    margin: 10px;
  }
`;
