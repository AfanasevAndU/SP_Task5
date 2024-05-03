import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 150px;
  min-height: 30px;
  font-size: 16px;
  background: #4676d7;
  color: white;
  border: 0;
  border-style: solid;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #1902f7;
    border: 1px;
    color: white;
    cursor: pointer;
  }
`;

export const StyledSelectContainer = styled.div`
  display: flex;
  align-items: center;e
`;

export const StyledSelectedOption = styled.li<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "blue" : "black")};
`;
