import React, { useState, useEffect } from "react";
import { FolderGridView } from "../..";
import { FolderListView } from "../..";
import { MyDropdown, MyButton, MyModal } from "../../../presentational";
import {
  BsInfoCircle,
  BsChevronDown,
  BsPlusSquare,
  BsUpload,
  BsGrid,
  BsSortDown,
} from "react-icons/bs";

import * as S from "./styles";
import { Flex } from "../../templates/flex/Flex.styled";
import { CommandMenu } from "../commandMenu/CommandMenu";
import { useSelector } from "react-redux";

const AllFiles = (props) => {
  const {
    isGridView,
    data,
    dropdownButtonsData,
    sortFilter,
    checkFile,
    changeView,
    isShowCommandMenu,
    filteredData,
    viewButtonsData,
    clickHandler,
    selectedElementsNumber,
    cancelSelectionFile,
    deleteFileHandler,
    handleModalState,
    handleModalStateClose
  } = props;

// sort
const [sortConfig, setSortConfig] = useState({
  sortKey: "sort",
  direction: "ascending",
});

const handleItemClick = (sortKey) => {
  let direction = "ascending";
  if (
    sortConfig &&
    sortConfig.sortKey === sortKey &&
    sortConfig.direction === "ascending"
  ) {
    direction = "descending";
  }
  setSortConfig({ sortKey, direction });
};



  return (
    <S.UploadedContent>
      <S.Bar>
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
            clickHandler={clickHandler}
            dropdownButtonsData={dropdownButtonsData.viewButtonsData}
          >
            <MyButton startIcon={<BsGrid />} endIcon={<BsChevronDown />}>
              View
            </MyButton>
          </MyDropdown>
        </S.LeftButtons>
        {isShowCommandMenu ? (
          <CommandMenu selectedElementsNumber={selectedElementsNumber} cancelSelectionFile={cancelSelectionFile}
          deleteFileHandler={deleteFileHandler}
          handleModalState={handleModalState}
          />
        ) : (
          <></>
        )}
      </S.Bar>
      <S.Content>
        {isGridView ? (
          <FolderGridView
            data={data}
            sortFilter={sortFilter}
            checkFile={checkFile}
            filteredData={filteredData}
          />
        ) : (
          <FolderListView
            dropdownButtonsData={dropdownButtonsData}
            data={data}
            sortFilter={sortFilter}
            checkFile={checkFile}
            filteredData={filteredData}
          />
        )}
      </S.Content>

    </S.UploadedContent>
  );
};

export { AllFiles };
