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

  const isOneEl = true;

  return (
    <S.CommandMenu>
      <S.RightButtons>
        {isOneEl ? (
          <>
            <MyButton clickButton={deleteFileHandler} startIcon={<BsBucket />}>
              Delete
            </MyButton>
            <MyButton clickButton={renameFile} startIcon={<BsPencilSquare />}>
              Rename
            </MyButton>
          </>
        ) : (
          <MyButton clickButton={deleteFileHandler} startIcon={<BsBucket />}>
            Delete
          </MyButton>
        )}
      </S.RightButtons>
      
      <S.LeftButtons>
        <MyButton clickButton={cancelSelectionFile} endIcon={<BsXLg />}>
          Selected: {selectedElementsNumber}
        </MyButton>
      </S.LeftButtons>
    </S.CommandMenu>
  );
};

export { CommandMenu };
