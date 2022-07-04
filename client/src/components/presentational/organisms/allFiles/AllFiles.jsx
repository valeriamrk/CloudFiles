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

const AllFiles = (props) => {
  const { gridView, data, dropdownButtonsData, sortFilter, checkFile, changeView } = props;

  return (
    <S.UploadedContent>
      <Flex display="row">
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
      <MyButton>Delete</MyButton>
      <MyButton>Rename</MyButton>
      <MyButton>Cancel selection</MyButton>
      <div>selected: 1</div>
      </Flex>
      {gridView ? (
        <FolderGridView
          data={data}
          sortFilter={sortFilter}
          checkFile={checkFile}
        />
      ) : (
        <FolderListView
          dropdownButtonsData={dropdownButtonsData}
          data={data}
          sortFilter={sortFilter}
          checkFile={checkFile}
        />
      )}
    </S.UploadedContent>
  );
};

export { AllFiles };
