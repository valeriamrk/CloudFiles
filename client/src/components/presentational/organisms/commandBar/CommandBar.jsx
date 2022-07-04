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
import { MyDropdown } from "../../../presentational";
import { MyModal } from "../modal/MyModal";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModalState,
  changeModalStateClose,
} from "../../../../store/modalsDataSlice";
import { UploadNewFile } from "../uploadNewFile/UploadNewFile";
import { CreateNewFolder } from "../createNewFolder/CreateNewFolder";


const CommandBar = (props) => {
  const dispatch = useDispatch();

  const { changeView, dropdownButtonsData, sortFilter, addNewFile  } = props;
  const modalsData = useSelector((state) => state.modalsData.allModals);

  const handleModalState = (id) => {
    dispatch(changeModalState(id));
  };
  const handleModalStateClose = () => {
    dispatch(changeModalStateClose());
  };


  return (
    <S.CommandBar>
      <S.RightButtons>

        <MyButton
          startIcon={<BsUpload />}
          clickButton={() => addNewFile("vbn", "dir")}
        >
          New file
        </MyButton>
        <MyButton
          startIcon={<BsPlusSquare />}
          clickButton={() => handleModalState({ id: 6 })}
        >
          New folder
        </MyButton>
        <MyButton
          clickButton={() => handleModalState({ id: 5 })}
          startIcon={<BsUpload />}
        >
          Upload
        </MyButton>
      </S.RightButtons>

      <S.LeftButtons>
        <MyDropdown
          buttonClick={sortFilter}
          dropdownButtonsData={dropdownButtonsData.sortButtonsData}
        >
          <MyButton startIcon={<BsSortDown />} endIcon={<BsChevronDown />}>
            Sort
          </MyButton>
        </MyDropdown>
        <MyDropdown
          buttonClick={changeView}
          dropdownButtonsData={dropdownButtonsData.viewButtonsData}
        >
          <MyButton startIcon={<BsGrid />} endIcon={<BsChevronDown />}>
            View
          </MyButton>
        </MyDropdown>

      </S.LeftButtons>
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
        <CreateNewFolder addNewFile={addNewFile}/>
      </MyModal>
    </S.CommandBar>
  );
};

export { CommandBar };
