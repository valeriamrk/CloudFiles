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

const CommandBar = (props) => {
  const {
    changeView,
    dropdownButtonsData,
    sortFilter,
    addNewFile,
    uploadFile,
  } = props;

  return (
    <S.CommandBar>
      <S.RightButtons>
        <MyDropdown
          buttonClick={addNewFile}
          dropdownButtonsData={dropdownButtonsData.newFileButtonsData}
        >
          <MyButton startIcon={<BsPlusSquare />} endIcon={<BsChevronDown />}>
            New file
          </MyButton>
        </MyDropdown>
        <MyDropdown
          // buttonClick={uploadFile}
          dropdownButtonsData={dropdownButtonsData.uploadFileButtonsData}
        >
          <MyButton startIcon={<BsUpload />} endIcon={<BsChevronDown />}>
            Upload
          </MyButton>
        </MyDropdown>
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

        <MyButton justIcon={"justIcon"}>
          <BsInfoCircle />
        </MyButton>
      </S.LeftButtons>
    </S.CommandBar>
  );
};

export { CommandBar };
