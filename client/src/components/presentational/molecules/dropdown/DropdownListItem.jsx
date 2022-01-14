import React from "react";
import * as S from './styles'
import { BsCheck2, BsGrid, BsChevronDown } from "react-icons/bs";


const DropdownListItem = (props) => {

  const { buttonClick } = props;


  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

const {element} = props

  return (
    <S.DropdownListItem onClick={() => handleButtonClick(element.id, element.value)}
    href="#">
      <S.Checked checked="checked">{element.checked && <BsCheck2 />}</S.Checked>
      <div>{element.value}</div>
    </S.DropdownListItem>
  );
};

export default DropdownListItem;
