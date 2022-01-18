import React from "react";
import * as S from './styles'
import { BsCheck2, BsGrid, BsChevronDown } from "react-icons/bs";


const DropdownListItem = (props) => {

  const { element } = props;


  const handleButtonClick = (id, value) => {
    element.clickHandler(id, value);
  };

  return (
    <S.DropdownListItem onClick={() => handleButtonClick(element.id, element.value)}
    href="#">
      <S.Checked checked="checked">{element.checked && <BsCheck2 />}</S.Checked>
      <div>{element.value}</div>
    </S.DropdownListItem>
  );
};

export default DropdownListItem;
