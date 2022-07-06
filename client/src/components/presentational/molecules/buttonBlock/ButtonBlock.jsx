import React from "react";
import {
  MyButton,
  MyModal,
  UploadNewFile,
  CreateNewFolder,
} from "../../../presentational";
import * as S from "./styles";
import {
  BsInfoCircle,
  BsChevronDown,
  BsPlusSquare,
  BsUpload,
  BsGrid,
  BsSortDown,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModalState,
  changeModalStateClose,
} from "../../../../store/modalsDataSlice";

const ButtonBlock = (props) => {
  const { addNewFile, uploadFile } = props;
  const dispatch = useDispatch();
  const modalsData = useSelector((state) => state.modalsData.allModals);

  const handleModalState = (id) => {
    dispatch(changeModalState(id));
  };
  const handleModalStateClose = () => {
    dispatch(changeModalStateClose());
  };
  return (
    <S.BlocksWrapper>
      <S.FirstBlock>
        <MyButton
          startIcon={<BsUpload />}
          clickButton={() => handleModalState({ id: 5 })}
        >
          Upload new file
        </MyButton>
      </S.FirstBlock>
      <S.SecondBlock>
        <MyButton
          startIcon={<BsPlusSquare />}
          clickButton={() => handleModalState({ id: 6 })}
        >
          Create new folder
        </MyButton>
      </S.SecondBlock>
      <S.ThirdBlock>
        <MyButton startIcon={<BsUpload />}>Some button</MyButton>
      </S.ThirdBlock>
      <MyModal
        modalActive={modalsData[4].opened}
        handleClose={handleModalStateClose}
        modalsData={modalsData}
      >
        <UploadNewFile />
      </MyModal>
      <MyModal
        modalActive={modalsData[5].opened}
        handleClose={handleModalStateClose}
        modalsData={modalsData}
      >
        <CreateNewFolder addNewFile={addNewFile} />
      </MyModal>
    </S.BlocksWrapper>
  );
};

export { ButtonBlock };
