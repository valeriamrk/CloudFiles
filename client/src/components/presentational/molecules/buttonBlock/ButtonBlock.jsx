import React from "react";
import { MyButton } from "../../../presentational";
import * as S from "./styles";
import {
  BsInfoCircle,
  BsChevronDown,
  BsPlusSquare,
  BsUpload,
  BsGrid,
  BsSortDown,
} from "react-icons/bs";

const ButtonBlock = () => {
  return (
    <S.BlocksWrapper>
      <S.FirstBlock>
        <MyButton startIcon={<BsUpload />}>Upload new file</MyButton>
      </S.FirstBlock>
      <S.SecondBlock>
        <MyButton startIcon={<BsPlusSquare />}>Create new folder</MyButton>
      </S.SecondBlock>
      <S.ThirdBlock>
        <MyButton startIcon={<BsUpload />}>Upload new file</MyButton>
      </S.ThirdBlock>
    </S.BlocksWrapper>
  );
};

export { ButtonBlock };
