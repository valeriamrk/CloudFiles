import React, { useState, useEffect } from "react";
import { FolderGridView } from "../..";
import { FolderListView } from "../..";
import { MyDropdown, MyButton } from "../../../presentational";
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
    cancelSelectionFile
  } = props;


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
          <CommandMenu selectedElementsNumber={selectedElementsNumber} cancelSelectionFile={cancelSelectionFile}/>
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
