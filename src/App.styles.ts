import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/adrian-infernus.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    html {
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    background: -webkit-linear-gradient(#fff, #e0b3c9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #759bc8);
    border: 2px solid;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 10px;
  }
`;
