import { FC } from "react";
import { ContainerProps } from "./container.types";
import { StyledContainer } from "./container.styles";

export const Container: FC<ContainerProps> = ({
  flexDirection,
  id,
  children,
}) => {
  return (
    <StyledContainer id={id} flexDirection={flexDirection}>
      {children}
    </StyledContainer>
  );
};
