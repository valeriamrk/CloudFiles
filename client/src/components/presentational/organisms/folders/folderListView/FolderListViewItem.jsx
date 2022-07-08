import React from "react";
import { StyledCheckbox } from "../../../../presentational";
import * as S from "./styles";

const FolderListViewItem = (props) => {
  const { checkFile, checked, id } = props;
  
  const checkboxActive = (id, checked) => {
    checkFile(id, checked);
  };
  return (
    <S.ListStyle onClick={() => checkboxActive(id, checked)} checked={checked}>
      <S.Container>
        <S.LeftContainer>
          <S.CheckboxContainer checked={checked}>
            <StyledCheckbox checked={checked} checkFile={checkFile} id={id} />
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
