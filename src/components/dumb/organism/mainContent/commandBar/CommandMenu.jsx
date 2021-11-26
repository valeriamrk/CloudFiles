import React from "react";
import MyButton from "../../../atoms/MyButton";
import * as S from "../styles";
import {
  BsShare,
  BsBucket,
  BsFolderSymlink,
  BsFiles,
  BsPencilSquare,
  BsXLg,
} from "react-icons/bs";

const CommandMenu = (props) => {
  const {
    shareFile,
    deleteFile,
    moveFile,
    copyFile,
    renameFile,
    cancelSelectionFile,
    selectedElementsNumber
  } = props;
  return (
    <S.CommandBar>
      <S.RightButtons>
        <MyButton clickButton={shareFile} startIcon={<BsShare />}>
          {" "}
          Share
        </MyButton>
        <MyButton clickButton={deleteFile} startIcon={<BsBucket />}>
          Delete
        </MyButton>
        <MyButton clickButton={moveFile} startIcon={<BsFolderSymlink />}>
          Move to
        </MyButton>
        <MyButton clickButton={copyFile} startIcon={<BsFiles />}>
          Copy
        </MyButton>
        <MyButton clickButton={renameFile} startIcon={<BsPencilSquare />}>
          Rename
        </MyButton>
      </S.RightButtons>
      <S.LeftButtons>
        <MyButton clickButton={cancelSelectionFile} endIcon={<BsXLg />}>
          Selected {selectedElementsNumber}
        </MyButton>
      </S.LeftButtons>
    </S.CommandBar>
  );
};

export default CommandMenu;
