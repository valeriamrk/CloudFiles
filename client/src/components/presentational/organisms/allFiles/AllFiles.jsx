import React, { useState, useEffect } from "react";
import { FolderGridView } from "../..";
import { FolderListView } from "../..";
import { MyDropdown, MyButton, Loader } from "../../../presentational";
import { BsChevronDown, BsGrid, BsSortDown } from "react-icons/bs";
import * as S from "./styles";
import { Flex } from "../../templates/flex/Flex.styled";
import { CommandMenu } from "../commandMenu/CommandMenu";
import { sortRows } from "../../../../utils/helpers/sortHelper";
import { useDispatch } from "react-redux";
import { sortCheck } from "../../../../store/dropdownButtonsSlice";

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
    clickHandler,
    selectedElementsNumber,
    cancelSelectionFile,
    deleteFileHandler,
    handleModalState,
    isLoading,
  } = props;

  // const [sortedData, setSortedData] = useState(data);
  const [sortedData, setSortedData] = useState(filteredData);
  const [sortConfig, setSortConfig] = useState({
    sortKey: "title",
    direction: "ascending",
  });

  useEffect(() => {
    sortedAndFilteredData();
  }, [sortConfig]);

  useEffect(() => {
    setSortedData(filteredData);
  }, [filteredData]);

  const dispatch = useDispatch();

  const sortedAndFilteredData = () => {
    // const sortedRows = sortRows(filteredData, sortConfig);
    const sortedRows = sortRows(sortedData, sortConfig);
    setSortedData(sortedRows);
  };

  // const sortedAndFilteredData = () => {
  //   const changedData = [...data];

  //   if (filteredData) {
  //     const sortedRows = sortRows(filteredData, sortConfig);
  //     setSortedData(sortedRows);
  //   } else {
  //     const sortedRows = sortRows(changedData, sortConfig);
  //     setSortedData(sortedRows);
  //   }
  // };

  const handleSortClick = (direction, id) => {
    dispatch(sortCheck(id));

    setSortConfig({
      sortKey: "title",
      direction,
    });
  };

  return (
    <S.UploadedContent>
      <S.Bar>
        <S.LeftButtons>
          <MyDropdown
            buttonClick={(element) =>
              handleSortClick(element.direction, element.id)
            }
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
          <CommandMenu
            selectedElementsNumber={selectedElementsNumber}
            cancelSelectionFile={cancelSelectionFile}
            deleteFileHandler={deleteFileHandler}
            handleModalState={handleModalState}
          />
        ) : (
          <></>
        )}
      </S.Bar>
      <S.Content>
        {isLoading ? (
          <Flex justifyContent="center">
            <Loader />
          </Flex>
        ) : (
          <>
            {isGridView ? (
              <FolderGridView
                // data={data}
                // sortFilter={sortFilter}
                checkFile={checkFile}
                // filteredData={filteredData}
                sortedData={sortedData}
              />
            ) : (
              <FolderListView
                dropdownButtonsData={dropdownButtonsData}
                data={data}
                sortFilter={sortFilter}
                checkFile={checkFile}
                // filteredData={filteredData}
                sortedData={sortedData}
              />
            )}
          </>
        )}
      </S.Content>
    </S.UploadedContent>
  );
};

export { AllFiles };
