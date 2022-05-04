import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background-color: #ebfeff;
  border-radius: 20px;
  border: 2px solid #0085a3;
  text-align: center;
  padding: 20px;

  p {
    font-size: 1rem;
  }
`;

interface ButtonWrapperProps {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    border-radius: 20px;
    border: none;
    background: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "white"};
    color: ${({ correct, userClicked }) =>
      correct ? "white" : !correct && userClicked ? "white" : "black"};
  }
`;
