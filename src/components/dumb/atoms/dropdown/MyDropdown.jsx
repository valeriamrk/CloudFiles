import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../../smart/Hooks/useOnClickOutside";
import * as S from "../styles";
import DropdownListItem from "./DropdownListItem";

const MyDropdown = (props) => {
  const { dropdownButtonsData, children, buttonClick } = props;
  const [openDropdown, setOpenDropdown] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpenDropdown(false))
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <S.Dropdown onClick={() => handleOpenDropdown()} ref={ref}>
      {children}
      <S.DropdownContent openDropdown={openDropdown}>
        {dropdownButtonsData.map((element) => (
          <DropdownListItem
            buttonClick={buttonClick}
            element={element}
          ></DropdownListItem>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default MyDropdown;
