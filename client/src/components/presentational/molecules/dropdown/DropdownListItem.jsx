import React from "react";
import * as S from './styles'
import { BsCheck2 } from "react-icons/bs";


const DropdownListItem = (props) => {

  const { element, buttonClick} = props;


  return (
    <S.DropdownListItem onClick={() => buttonClick(element)}
    href="#">
      <S.Checked checked="checked">{element.checked && <BsCheck2 />}</S.Checked>
      <div>{element.value}</div>
    </S.DropdownListItem>
  );
};

export default DropdownListItem;
