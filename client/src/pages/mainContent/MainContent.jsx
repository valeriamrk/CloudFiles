import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Box,
  ButtonBlock,
  Flex,
  Loader,
  MyButton,
  OneElementCommandMenu,
} from "../../components/presentational";
import { CommandBar } from "../../components/presentational";
import { AllFiles } from "../../components/presentational";
import * as S from "../../components/presentational/organisms/commandBar/styles";
import { v4 as uuidv4 } from "uuid";
import { CommandMenu } from "../../components/presentational";
import { useSelector, useDispatch } from "react-redux";
import { checkOneFile, uncheckAllFiles } from "../../store/foldersDataSlice";
import { filesAPI } from "../../services/api/api";
import {
  createDir,
  getAllFiles,
  popToStack,
  setCurrentDir,
  deleteFile,
  checkToDeleteFile
} from "../../store/filesSlice";

const MainContent = (props) => {
  const currentDir = useSelector((state) => state.filesReducer.currentDir);
  const files = useSelector((state) => state.filesReducer.files);
  const dirStack = useSelector((state) => state.filesReducer.dirStack);
  const checkedToDelete = useSelector((state) => state.filesReducer.checkToDelete) 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFiles({ currentDir }));
    console.log("RENDER COMPONENT");
  }, [currentDir]);

  const fileClickHandler = (id, value) => {
    console.log("fileClickHandler", id, value);
  };
  const folderClickHandler = (id, value) => {
    console.log("folderClickHandler", id, value);
  };

  // тестовый стейт для получения постов

  const [isLoading, setIsLoading] = useState(false);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [showOneElementCommandMenu, setshowOneElementCommandMenu] =
    useState(false);
  const [gridView, setGridView] = useState(true);
  const [viewButtonsData, setViewButtonsData] = useState([
    { id: uuidv4(), value: "List", checked: false },
    { id: uuidv4(), value: "Tiles", checked: true },
  ]);
  const [dropdownButtonsData, setDropdownButtonsData] = useState({
    viewButtonsData: [
      { id: uuidv4(), value: "List", checked: false },
      { id: uuidv4(), value: "Tiles", checked: true },
    ],
    sortButtonsData: [
      { id: uuidv4(), value: "A - Z", checked: true },
      { id: uuidv4(), value: "Z - A", checked: false },
    ],
    newFileButtonsData: [
      { id: uuidv4(), value: "Folder" },
      { id: uuidv4(), value: "TXT file" },
    ],
    uploadFileButtonsData: [
      { id: uuidv4(), value: "File", clickHandler: fileClickHandler },
      { id: uuidv4(), value: "Folder", clickHandler: folderClickHandler },
    ],
    modifiedButtonsData: [
      { id: uuidv4(), value: "Older to newer" },
      { id: uuidv4(), value: "Newer to older" },
    ],
    sizeButtonsData: [
      { id: uuidv4(), value: "Smaller to larger" },
      { id: uuidv4(), value: "Larger to smaller" },
    ],

  });

  const [checkedElementsArray, setCheckedElementsArray] = useState([]);
  const [selectedElementsNumber, setSelectedElementsNumber] = useState("");

  const changeView = (id, value) => {
    const changedViewButtonsData = dropdownButtonsData.viewButtonsData.map(
      (element) => {
        if (element.id === id) {
          element.checked = true;
        } else {
          element.checked = false;
        }
        return element;
      }
    );
    setViewButtonsData(changedViewButtonsData);

    if (value === "Tiles") {
      setGridView(true);
    } else if (value === "List") {
      setGridView(false);
    }
  };

  const checkFile = (id, checked) => {
    dispatch(checkOneFile({ id, checked }));

    //считаем кол-во чекнутых элементов

    let transformedArray = [];
    if (!checkedElementsArray.includes(id)) {
      transformedArray = [...checkedElementsArray, id];
    } else {
      transformedArray = checkedElementsArray.filter(
        (element) => element !== id
      );
    }

    // показывать комманд меню или нет

    // if (transformedArray.length > 0) {
    //   setshowOneElementCommandMenu(true);
    if (transformedArray.length > 0) {
      setShowCommandMenu(true);
      // } else if (transformedArray.length > 1) {
      //   setShowCommandMenu(true);
    } else {
      setShowCommandMenu(false);
    }

    setCheckedElementsArray([...transformedArray]);
    setSelectedElementsNumber(transformedArray.length);
  };

  const cancelSelectionFile = () => {
    dispatch(uncheckAllFiles());
    setCheckedElementsArray([]);
    setShowCommandMenu(false);
  };

  const backClickHandler = () => {
    const copyOfArray = [...dirStack]
    copyOfArray.pop()
    const lastElementOfArray = copyOfArray.pop()
    dispatch(popToStack())
    dispatch(setCurrentDir(lastElementOfArray));
  };

  const sortFilter = () => {
    console.log("sort");
  };

  const addNewFile = (name, type) => {
    dispatch(createDir({ name, type, currentDir }));
    console.log("newfile", name, type);
  };

  const uploadFile = () => {
    console.log("uploadfile");
  };

  const deleteFileHandler = (e, id) => {
    e.stopPropagation()
    dispatch(checkToDeleteFile(id))
    dispatch(deleteFile(id))
    
    console.log("deletefile");
  };

  const renameFile = () => {
    console.log("renamefile");
  };

  return (
    <S.MainContent>
      {showCommandMenu ? (
        <CommandMenu
        deleteFileHandler={deleteFileHandler}
          renameFile={renameFile}
          cancelSelectionFile={cancelSelectionFile}
          selectedElementsNumber={selectedElementsNumber}
        />
      ) : (
        // ) : showCommandMenu ? (
        //   <OneElementCommandMenu
        //     deleteFile={deleteFile}
        //     cancelSelectionFile={cancelSelectionFile}
        //     selectedElementsNumber={selectedElementsNumber}
        //   />)
        // <CommandBar
        //   dropdownButtonsData={dropdownButtonsData}
        //   changeView={changeView}
        //   sortFilter={sortFilter}
        //   addNewFile={addNewFile}
        //   uploadFile={uploadFile}
        // />
        <ButtonBlock/>
      )}

      {/* <S.AllContent> */}
      <Box>
        <MyButton clickButton={() => backClickHandler()}>Back</MyButton>
      </Box>

      <S.Title>All files</S.Title>

      {isLoading ? (
        <Flex justifyContent="center">
          <Loader />
        </Flex>
      ) : (
        <AllFiles
          dropdownButtonsData={dropdownButtonsData}
          data={files}
          gridView={gridView}
          sortFilter={sortFilter}
          checkFile={checkFile}
          changeView={changeView}
        />
      )}
      {/* </S.AllContent> */}
    </S.MainContent>
  );
};

export { MainContent };
