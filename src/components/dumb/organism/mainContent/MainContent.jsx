import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../atoms/Loader";
import CommandBar from "./commandBar/CommandBar";
import UploadedFolders from "./commandBar/UploadedContent/UploadedFolders";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import CommandMenu from "./commandBar/CommandMenu";

const MainContent = (props) => {
  useEffect(() => {
    sendGetRequest();
  }, []);

  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [viewButtonsData, setViewButtonsData] = useState([
    { id: uuidv4(), value: "List", checked: false },
    { id: uuidv4(), value: "Tiles", checked: true },
  ]);
  const [sortButtonsData, setSortButtonsData] = useState([
    { id: uuidv4(), value: "A - Z", checked: true },
    { id: uuidv4(), value: "Z - A", checked: false },
  ]);
  const [newFileButtonsData, setNewFileButtonsData] = useState([
    { id: uuidv4(), value: "Folder" },
    { id: uuidv4(), value: "TXT file" },
    { id: uuidv4(), value: "Word document" },
    { id: uuidv4(), value: "Excel workbook" },
  ]);

  const [uploadFileButtonsData, setUploadFileButtonsData] = useState([
    { id: uuidv4(), value: "File" },
    { id: uuidv4(), value: "Folder" },
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
      { id: uuidv4(), value: "Word document" },
      { id: uuidv4(), value: "Excel workbook" },
    ],
    uploadFileButtonsData: [
      { id: uuidv4(), value: "File" },
      { id: uuidv4(), value: "Folder" },
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

  const [fakeListViewArray, setFakeListViewArray] = useState([
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
      modified: "18/11/2021",
      size: "200Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
      modified: "19/11/2021",
      size: "220Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
      modified: "17/11/2021",
      size: "250Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 4,
      title: "non esse culpa molestiae omnis sed optio",
      modified: "16/11/2021",
      size: "100Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 5,
      title: "eaque aut omnis a",
      modified: "14/11/2021",
      size: "500Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 6,
      title: "natus impedit quibusdam illo est",
      modified: "15/11/2021",
      size: "270Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 7,
      title: "quibusdam autem aliquid et et quia",
      modified: "20/11/2021",
      size: "600Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 8,
      title: "qui fuga est a eum",
      modified: "21/11/2021",
      size: "800Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 9,
      title: "saepe unde necessitatibus rem",
      modified: "23/11/2021",
      size: "20Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 10,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
  ]);

  const [checkedElementsArray, setCheckedElementsArray] = useState([]);
  const [selectedElementsNumber, setSelectedElementsNumber] = useState("");

  const sendGetRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setFolders(response.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

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
    const checkedFile = fakeListViewArray.map((element) => {
      if (element.id === id) {
        element.checked = !checked;
      }
      return element;
    });
    setFakeListViewArray(checkedFile);
    setShowCommandMenu(!showCommandMenu);

    //считаем кол-во чекнутых элементов
    const tempCheckedElementsArray = [...checkedElementsArray]
    const filteredCheckedElementArray = tempCheckedElementsArray.filter(item => item !== id)
    filteredCheckedElementArray.push(id)
    setCheckedElementsArray(filteredCheckedElementArray)
    setSelectedElementsNumber(filteredCheckedElementArray.length)
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

  const shareFile = () => {
    console.log("sharefile");
  };
  const deleteFile = () => {
    console.log("deletefile");
  };
  const moveFile = () => {
    console.log("movefile");
  };
  const copyFile = () => {
    console.log("copyfile");
  };
  const renameFile = () => {
    console.log("renamefile");
  };
  const cancelSelectionFile = () => {
    console.log("cancelSelectionfile");
  };

  return (
    <S.MainContent>
      {/* <CommandBar
        dropdownButtonsData={dropdownButtonsData}
        changeView={changeView}
        viewButtonsData={viewButtonsData}
        sortButtonsData={sortButtonsData}
        sortFilter={sortFilter}
        addNewFile={addNewFile}
        newFileButtonsData={newFileButtonsData}
        uploadFileButtonsData={uploadFileButtonsData}
        uploadFile={uploadFile}
      /> */}
      {showCommandMenu ? (
        <CommandMenu
          shareFile={shareFile}
          deleteFile={deleteFile}
          moveFile={moveFile}
          copyFile={copyFile}
          renameFile={renameFile}
          cancelSelectionFile={cancelSelectionFile}
          selectedElementsNumber={selectedElementsNumber}
        />
      ) : (
        <CommandBar
          dropdownButtonsData={dropdownButtonsData}
          changeView={changeView}
          viewButtonsData={viewButtonsData}
          sortButtonsData={sortButtonsData}
          sortFilter={sortFilter}
          addNewFile={addNewFile}
          newFileButtonsData={newFileButtonsData}
          uploadFileButtonsData={uploadFileButtonsData}
          uploadFile={uploadFile}
        />
      )}

      {/* <S.AllContent> */}
      <S.Title>All files</S.Title>
      {isLoading ? (
        <Loader />
      ) : (
        <UploadedFolders
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

export default MainContent;
