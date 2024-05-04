import { FC } from "react";
import { FormProps } from "./form.types";
import { Button } from "../button";

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <>
      <form>{children}</form>
      <div>
        <Button onClick={onSubmit}> Отправить</Button>
      </div>
    </>
  );
};
