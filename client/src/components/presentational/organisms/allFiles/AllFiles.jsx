import React from "react";
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
  const { gridView, data, dropdownButtonsData, sortFilter, checkFile, changeView, showCommandMenu, filteredData } = props;

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
        dropdownButtonsData={dropdownButtonsData.viewButtonsData}
      >
        <MyButton startIcon={<BsGrid />} endIcon={<BsChevronDown />}>
          View
        </MyButton>
      </MyDropdown>
      </S.LeftButtons>
      {showCommandMenu ? (<CommandMenu/>) : (<></>)}
      </S.Bar>
      <S.Content>
      {gridView ? (
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
