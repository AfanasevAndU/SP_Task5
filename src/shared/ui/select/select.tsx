import React, { useState, useEffect } from "react";
import { SelectProps, Option } from "./select.types";
import { StyledSelect, StyledSelectedOption } from "./select.styles";

export const Select: React.FC<SelectProps> = ({
  selected,
  options,
  onClose,
  onChange,
  title = "",
  placeholder = "Жанру: ",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest(".select")) {
      setIsOpen(false);
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="select">
      <StyledSelect onClick={toggleDropdown} className="selected">
        {selected ? selected.name : placeholder}
        {title}
      </StyledSelect>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <StyledSelectedOption
              key={option.id}
              onClick={() => handleOptionClick(option)}
              isSelected={option.id === selected?.id}
              className="options"
            >
              {option.name}
            </StyledSelectedOption>
          ))}
        </ul>
      )}
    </div>
  );
};
