import { FC } from "react";
import { StyledButton } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({ children, type, id, onClick }) => {
  return (
    <StyledButton id={id} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
