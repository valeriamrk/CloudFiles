import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";
import * as S from "./styles";
import DropdownListItem from "./DropdownListItem";

const MyDropdown = (props) => {
  const { dropdownButtonsData, children, buttonClick, ...other } = props;
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenDropdown(false));
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <S.Dropdown {...other} onClick={() => handleOpenDropdown()} ref={ref}>
      {children}
      <S.DropdownContent openDropdown={openDropdown}>
        {dropdownButtonsData.map((element) => (
          <DropdownListItem
            key={element.id}
            buttonClick={buttonClick}
            element={element}
          ></DropdownListItem>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export { MyDropdown };
