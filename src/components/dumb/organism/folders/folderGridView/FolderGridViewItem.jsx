import React from "react";
import * as S from "./styles";

const FolderGridViewItem = (props) => {
  return (
    <S.GridStyle onDoubleClick={() => console.log("openfile")}>
      <S.Checkbox type="checkbox"></S.Checkbox>
      <S.FolderImg
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png"
        alt="folder icon"
      />
      {/* <div>{props.id}.</div> */}
      <S.FolderName>
        <S.TextContainer>{props.name}</S.TextContainer>
      </S.FolderName>
    </S.GridStyle>
  );
};

export default FolderGridViewItem;
