import React from "react";
import { Checkbox } from "../../../../presentational";
import * as S from "./styles";

const FolderGridViewItem = (props) => {
  const { checkFile, checked, id } = props;
  const checkboxActive = (id, checked) => {
    checkFile(id, checked);
  };

  return (
    <S.GridStyle onClick={() => checkboxActive(id, checked)} checked={checked}>
      {/* <S.Checkbox type="checkbox"></S.Checkbox> */}
      <S.CheckboxContainer checked={checked}>
        <Checkbox checked={checked} checkFile={checkFile} id={id} />
      </S.CheckboxContainer>
      <S.FolderImg
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png"
        alt="folder icon"
        onDoubleClick={() => console.log("openfile")}
      />
      {/* <div>{props.id}.</div> */}
      <S.FolderName>
        <S.TextContainer>{props.name}</S.TextContainer>
      </S.FolderName>
    </S.GridStyle>
  );
};

export default FolderGridViewItem;
