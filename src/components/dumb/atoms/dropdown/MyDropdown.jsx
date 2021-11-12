import React from "react";
import { BsCheck2 } from "react-icons/bs";
import * as S from "../styles";
import DropdownListItem from "./DropdownListItem";

const MyDropdown = (props) => {
  const { dropdownButtonsData, children, buttonClick } = props;

  return (
    <S.Dropdown>
      {children}
      <S.DropdownContent>
        {dropdownButtonsData.map((element) => (
          <DropdownListItem buttonClick={buttonClick} element={element}></DropdownListItem>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default MyDropdown;
