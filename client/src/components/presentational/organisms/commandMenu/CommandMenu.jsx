import React from "react";
import { MyButton } from "../../../presentational";
import * as S from "./styles";
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
    deleteFileHandler,
    renameFile,
    cancelSelectionFile,
    selectedElementsNumber,
  } = props;
  return (
    <S.CommandMenu>
      <S.RightButtons>
        {/* <MyButton clickButton={shareFile} startIcon={<BsShare />}>
          Share
        </MyButton> */}
        <MyButton clickButton={deleteFileHandler} startIcon={<BsBucket />}>
          Delete
        </MyButton>
        {/* <MyButton clickButton={moveFile} startIcon={<BsFolderSymlink />}>
          Move to
        </MyButton> */}
        {/* <MyButton clickButton={copyFile} startIcon={<BsFiles />}>
          Copy
        </MyButton> */}
        <MyButton clickButton={renameFile} startIcon={<BsPencilSquare />}>
          Rename
        </MyButton>
      </S.RightButtons>
      <S.LeftButtons>
        <MyButton clickButton={cancelSelectionFile} endIcon={<BsXLg />}>
          Selected {selectedElementsNumber}
        </MyButton>
      </S.LeftButtons>
    </S.CommandMenu>
  );
};

export { CommandMenu };
