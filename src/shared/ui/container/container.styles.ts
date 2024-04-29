import styled from "styled-components";
import { ContainerProps } from "./container.types";

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  padding: 15px 20px;
  background-color: white;
  border-bottom: 1px solid black;
  width: 100%;
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
