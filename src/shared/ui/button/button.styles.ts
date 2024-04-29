import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (props.type === "reset" ? "50px" : "160px")};
  height: ${(props) => (props.type === "reset" ? "30px" : "40px")};
  font-size: 16px;
  background: ${(props) => (props.type === "reset" ? "#CD5C5C" : "#4676D7")};
  color: white;
  border: 0;
  border-style: solid;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;

  &:hover {
    background: #1902f7;
    border: 1px;
    color: white;
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }
`;
