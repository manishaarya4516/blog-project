import { styled } from "styled-components";

export const LoginStyle = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e3ddcc;
  background-size: cover;

  .loginTitle {
    font-size: 50px;
  }

  .loginForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .loginForm > label {
    margin: 10px 0;
  }

  .loginInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 10px;
  }

  .loginInput:focus {
    outline: none;
  }

  .loginButton {
    margin-top: 20px;
    cursor: pointer;
    font-size: 20px;
    background-color: lightcoral;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

  .loginRegisterButton {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
  }
`;
