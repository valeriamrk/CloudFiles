import React from "react";
import Checkbox from "../../../atoms/Checkbox";
import * as S from "./styles";

const FolderListViewItem = (props) => {

const {checkFile, checked, id} = props
console.log(checked)
  const checkboxActive = (id, checked) => {
    checkFile(id, checked)
    console.log("checkboxActive");
  };
  return (
    <S.ListStyle onClick={() => checkboxActive(id, checked)} checked={checked}>
      <S.Container>
        <S.LeftContainer>
          <S.CheckboxContainer checked={checked}>
          <Checkbox checked={checked} checkFile={checkFile} id={id}/>
          </S.CheckboxContainer>
          <S.FolderImg
            onDoubleClick={() => console.log("openfile")}
            src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png"
            alt="folder icon"
          />
          <S.Title>{props.title}</S.Title>
        </S.LeftContainer>
        <S.ModContainer>
        <S.Modified>{props.modified}</S.Modified>
        </S.ModContainer>
        <S.SizeContainer>
        <S.Size>{props.size}</S.Size>
        </S.SizeContainer>
      </S.Container>
    </S.ListStyle>
  );
};

export default FolderListViewItem;
