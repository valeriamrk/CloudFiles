import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrentDir } from "../../../../../store/filesSlice";
import { StyledCheckbox } from "../../../../presentational";
import * as S from "./styles";

const FolderGridViewItem = (props) => {
  const currentDir = useSelector((state) => state.filesReducer.currentDir);

  const { checkFile, checked, id } = props;
  const checkboxActive = (id, checked) => {
    checkFile(id, checked);
  };
  const dispatch = useDispatch()

  const openDirHandler = (id) => {
    dispatch(pushToStack(id))
    dispatch(setCurrentDir(id))
  }
  return (
    <S.GridStyle onClick={() => checkboxActive(id, checked)} checked={checked}>
      {/* <S.Checkbox type="checkbox"></S.Checkbox> */}
      <S.CheckboxContainer checked={checked}>
        <StyledCheckbox checked={checked} checkFile={checkFile} id={id} />
      </S.CheckboxContainer>
      <S.FolderImg
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png"
        alt="folder icon"
        // onClick={() => console.log("opendir")}
        // onClick={type === 'dir' ? () => openDirHandler(id) : ''}
        onClick={() => openDirHandler(id)}
      />
      {/* <div>{props.id}.</div> */}
      <S.FolderName>
        <S.TextContainer>{props.name}</S.TextContainer>
      </S.FolderName>
    </S.GridStyle>
  );
};

export default FolderGridViewItem;
