import React from "react";
import Checkbox from "../../../atoms/Checkbox";
import * as S from "./styles";

const FolderGridViewItem = (props) => {

  const { checkFile, checked, id } = props;
  console.log(checked);
  const checkboxActive = (id, checked) => {
    checkFile(id, checked);
    console.log("checkboxActive");
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
