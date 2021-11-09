import React from "react";
import MyButton from "../../../atoms/MyButton";
import NewFileDropdownBtn from "../../../atoms/NewFileDropdownBtn";
import SortDropdownBtn from "../../../atoms/SortDropdownBtn";
import UploadDropdownBtn from "../../../atoms/UploadDropdownBtn";
import ViewDropdownBtn from "../../../atoms/ViewDropdownBtn";
import * as S from "../styles";


const CommandBar = (props) => {
  const {
    changeView,
    dropdownButtonsData,
    sortButtonsData,
    sortFilter,
    addNewFile,
    newFileButtonsData,
    uploadFileButtonsData,
    uploadFile
  } = props;

  return (
    <S.CommandBar>
      <S.RightButtons>
        <NewFileDropdownBtn
          newFileButtonsData={newFileButtonsData}
          buttonClick={addNewFile}
        />
        <UploadDropdownBtn uploadFileButtonsData={uploadFileButtonsData} buttonClick={uploadFile}/>
      </S.RightButtons>

      <S.LeftButtons>
        <SortDropdownBtn
          sortButtonsData={sortButtonsData}
          buttonClick={sortFilter}
        />
        <ViewDropdownBtn
          buttonClick={changeView}
          dropdownButtonsData={dropdownButtonsData}
        />
        <MyButton>Info</MyButton>
      </S.LeftButtons>
    </S.CommandBar>
  );
};

export default CommandBar;
