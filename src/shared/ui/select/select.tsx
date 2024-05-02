// Select.tsx
import React, { useState, useEffect } from "react";
import { SelectProps, Option } from "./select.types";

export const Select: React.FC<SelectProps> = ({
  selected,
  options,
  onClose,
  onChange,
  placeholder = "Жанру",
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
      <div className="selected" onClick={toggleDropdown}>
        {selected ? selected.name : placeholder}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
