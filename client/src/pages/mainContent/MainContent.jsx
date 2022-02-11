import axios from "axios";
import React, { useEffect, useState } from "react";
import {
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
  deleteFolder,
  renameFolder,
  getAllFolders
} from "../../store/folderSlice";

const MainContent = (props) => {
  const fakeListViewArray = useSelector(
    (state) => state.foldersData.allFolders
  );
  // console.log("fakeListViewArray", fakeListViewArray);
  const dispatch = useDispatch();

  useEffect(() => {
    sendGetRequest();
  }, []);

  // useEffect(() => {
  //   dispatch(createDir(), [dispatch])
  // })

  const fileClickHandler = (id, value) => {
    console.log("fileClickHandler", id, value);
  };
  const folderClickHandler = (id, value) => {
    console.log("folderClickHandler", id, value);
  };

  // тестовый стейт для получения постов
  const [testState, setTestState] = useState("");

  const [folders, setFolders] = useState([]);
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

  const sendGetRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      // const testResponse = await axios.get("http://127.0.0.1:5000/auth/posts");
      // setTestState(testResponse.data.post);
      setFolders(response.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // const getTestPosts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/auth/posts");
  //     setTestState(response.data)
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

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

  const sortFilter = () => {
    console.log("sort");
  };

  const addNewFile = () => {
    console.log("newfile");
  };

  const uploadFile = () => {
    console.log("uploadfile");
  };

  const deleteFile = () => {
    console.log("deletefile");
  };

  const renameFile = () => {
    console.log("renamefile");
  };

  const getFiles = async (name, type, parent) => {
    try {
      const response = await filesAPI.createDir(name, type, parent);
      console.log("getFiles", response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.MainContent>
      {showCommandMenu ? (
        <CommandMenu
          deleteFile={deleteFile}
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
        <CommandBar
          dropdownButtonsData={dropdownButtonsData}
          changeView={changeView}
          sortFilter={sortFilter}
          addNewFile={addNewFile}
          uploadFile={uploadFile}
        />
      )}

      {/* <S.AllContent> */}
      <S.Title>All files {testState}</S.Title>
      {/* <MyButton onClick={() => getFiles("test", "folder")}>Button</MyButton> */}
      <MyButton
        onClick={() =>
          dispatch(createDir({ name: "some_folder2", type: "folder" }))
        }
      >
        Button
      </MyButton>
      <MyButton onClick={() => dispatch(deleteFolder())}>Delete</MyButton>

      <MyButton onClick={() => dispatch(renameFolder())}>Rename</MyButton>
      <MyButton onClick={() => dispatch(getAllFolders())}>Rename</MyButton>

      {isLoading ? (
        <Flex justifyContent="center">
          <Loader />
        </Flex>
      ) : (
        <AllFiles
          dropdownButtonsData={dropdownButtonsData}
          data={folders}
          gridView={gridView}
          fakeListViewArray={fakeListViewArray}
          sortFilter={sortFilter}
          checkFile={checkFile}
        />
      )}
      {/* </S.AllContent> */}
    </S.MainContent>
  );
};

export { MainContent };
