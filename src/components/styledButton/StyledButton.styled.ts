import styled from "styled-components";

export const ButtonStyles = styled.button`
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
width: 400px;

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;
