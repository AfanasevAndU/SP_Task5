import { FC, useState } from "react";
import { InputProps } from "./input.types";

export const Input: FC<InputProps> = ({ onChange, placeholder, id }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onChange(value);
  };

  return (
    <input
      type="text"
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      value={searchTerm}
    />
  );
};
