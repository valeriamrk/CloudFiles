import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ButtonBlock,
  Flex,
  Loader,
  MyButton,
  MyModal,
} from "../../components/presentational";
import { AllFiles } from "../../components/presentational";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { checkOneFile, uncheckAllFiles } from "../../store/foldersDataSlice";
import { filesAPI } from "../../services/api/api";
import {
  createDir,
  getAllFiles,
  popToStack,
  setCurrentDir,
  deleteFile,
  checkToDeleteFile,
} from "../../store/filesSlice";
import { useOutletContext } from "react-router-dom";

const MainContent = (props) => {
  const { testData, filteredFolders, handleModalState, handleModalStateClose } =
    useOutletContext();

  const currentDir = useSelector((state) => state.filesReducer.currentDir);
  const files = useSelector((state) => state.filesReducer.files);
  const dirStack = useSelector((state) => state.filesReducer.dirStack);
  const checkedToDelete = useSelector(
    (state) => state.filesReducer.checkToDelete
  );
  // const testData = useSelector((state) => state.foldersData.allFolders);
  const modalsData = useSelector((state) => state.modalsData.allModals);

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
  const [isShowCommandMenu, setIsShowCommandMenu] = useState(false);
  const [isShowOneElementCommandMenu, setIsShowOneElementCommandMenu] =
    useState(false);
  const [isGridView, setIsGridView] = useState(true);
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

  // Change view: list or grid

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
      setIsGridView(true);
    } else if (value === "List") {
      setIsGridView(false);
    }
    cancelSelectionFile();
  };

  // 2. Check files

  const [checkedElementsArray, setCheckedElementsArray] = useState([]);
  const [selectedElementsNumber, setSelectedElementsNumber] = useState("");

  const checkFile = (id, checked) => {
    dispatch(checkOneFile({ id, checked }));

    //работает только если данные вне стейта
    //     testData.map((element) => {
    //       if (element.id === id) {
    //         element.checked = !checked;
    //       }
    //       return element;
    //   }
    // );
    // Counting of checked elements

    let transformedArray = [];
    if (!checkedElementsArray.includes(id)) {
      transformedArray = [...checkedElementsArray, id];
    } else {
      transformedArray = checkedElementsArray.filter(
        (element) => element !== id
      );
    }

    // показывать комманд меню или нет

    if (transformedArray.length > 0) {
      setIsShowCommandMenu(true);
    } else {
      setIsShowCommandMenu(false);
    }

    setCheckedElementsArray([...transformedArray]);
    setSelectedElementsNumber(transformedArray.length);
  };

  const cancelSelectionFile = () => {
    dispatch(uncheckAllFiles());

    //работает только если данные вне стейта
    //   const uncheckedFiles = testData.map((element) => {
    //       element.checked = false;
    //     return element
    //   }
    // );
    //   setCheckedElementsArray(uncheckedFiles);
    setIsShowCommandMenu(false);
    setCheckedElementsArray("");
  };

  const backClickHandler = () => {
    const copyOfArray = [...dirStack];
    copyOfArray.pop();
    const lastElementOfArray = copyOfArray.pop();
    dispatch(popToStack());
    dispatch(setCurrentDir(lastElementOfArray));
  };


  const addNewFile = (name, type) => {
    dispatch(createDir({ name, type, currentDir }));
    console.log("newfile", name, type);
  };

  const uploadFile = () => {
    console.log("uploadfile");
  };

  const deleteFileHandler = (e, id) => {
    // e.stopPropagation();
    // dispatch(checkToDeleteFile(id));
    // dispatch(deleteFile(id));
    console.log("deletefile");
  };

  const renameFile = () => {
    console.log("renamefile");
  };

  return (
    <S.MainContent>
      <S.Wrapper>
        <ButtonBlock addNewFile={addNewFile} uploadFile={uploadFile} />
        {/* <Box>
        <MyButton clickButton={() => backClickHandler()}>Back</MyButton>
      </Box> */}
        <S.Title>All files</S.Title>
        {isLoading ? (
          <Flex justifyContent="center">
            <Loader />
          </Flex>
        ) : (
          <Flex justifyContent="center">
            <AllFiles
              isShowCommandMenu={isShowCommandMenu}
              dropdownButtonsData={dropdownButtonsData}
              data={testData}
              // data={files}
              isGridView={isGridView}
              checkFile={checkFile}
              changeView={changeView}
              filteredData={filteredFolders}
              clickHandler={changeView}
              selectedElementsNumber={selectedElementsNumber}
              cancelSelectionFile={cancelSelectionFile}
              deleteFileHandler={deleteFileHandler}
              handleModalState={handleModalState}
              handleModalStateClose={handleModalStateClose}
            />
          </Flex>
        )}
      </S.Wrapper>
      <MyModal
        modalActive={modalsData[6].opened}
        handleClose={handleModalStateClose}
        modalsData={modalsData}
      >
        <S.ModalText>Are you sure you want to delete files?</S.ModalText>
        <MyButton primary clickButton={deleteFileHandler}>
          Delete
        </MyButton>
      </MyModal>
    </S.MainContent>
  );
};

export { MainContent };
