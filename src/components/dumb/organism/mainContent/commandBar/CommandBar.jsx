import React from "react";
import MyButton from "../../../atoms/MyButton";
import NewFileDropdownBtn from "../../../atoms/NewFileDropdownBtn";
import SortDropdownBtn from "../../../atoms/SortDropdownBtn";
import UniversalDropdown from "../../../atoms/dropdown/MyDropdown";
import UploadDropdownBtn from "../../../atoms/UploadDropdownBtn";
import ViewDropdownBtn from "../../../atoms/ViewDropdownBtn";
import * as S from "../styles";
import {
  BsInfoCircle,
  BsChevronDown,
  BsPlusSquare,
  BsUpload,
  BsGrid,
  BsSortDown,
} from "react-icons/bs";
import MyDropdown from "../../../atoms/dropdown/MyDropdown";

const CommandBar = (props) => {
  const {
    changeView,
    dropdownButtonsData,
    viewButtonsData,
    sortButtonsData,
    sortFilter,
    addNewFile,
    newFileButtonsData,
    uploadFileButtonsData,
    uploadFile,
  } = props;

  return (
    <S.CommandBar>
      <S.RightButtons>
        {/* <NewFileDropdownBtn
          newFileButtonsData={newFileButtonsData}
          buttonClick={addNewFile}
        />
        <UploadDropdownBtn
          uploadFileButtonsData={uploadFileButtonsData}
          buttonClick={uploadFile}
        /> */}
        <MyDropdown
        buttonClick={addNewFile}
          dropdownButtonsData={dropdownButtonsData.newFileButtonsData}
        >
          <MyButton startIcon={<BsPlusSquare />} endIcon={<BsChevronDown />}>
            New file
          </MyButton>
        </MyDropdown>
        <MyDropdown
        buttonClick={uploadFile}
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

        {/* <SortDropdownBtn
          sortButtonsData={sortButtonsData}
          buttonClick={sortFilter}
        />
        <ViewDropdownBtn
          buttonClick={changeView}
          viewButtonsData={viewButtonsData}
        /> */}
        <MyButton>
          <BsInfoCircle />
        </MyButton>
        {/* <UniversalDropdown uploadFileButtonsData={uploadFileButtonsData}/> */}
      </S.LeftButtons>
    </S.CommandBar>
  );
};

export default CommandBar;
