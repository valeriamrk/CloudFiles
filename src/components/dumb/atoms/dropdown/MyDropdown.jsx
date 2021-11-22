import React, { useState } from "react";
import * as S from "../styles";
import DropdownListItem from "./DropdownListItem";

const MyDropdown = (props) => {
  const { dropdownButtonsData, children, buttonClick } = props;
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <S.Dropdown onClick={() => handleOpenDropdown()}>
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
