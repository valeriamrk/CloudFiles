import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../atoms/Loader";
import CommandBar from "./commandBar/CommandBar";
import UploadedFolders from "./commandBar/UploadedContent/UploadedFolders";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

const MainContent = (props) => {
  useEffect(() => {
    sendGetRequest();
  }, []);

  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    });

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
    const changedViewButtonsData = dropdownButtonsData.viewButtonsData.map((element) => {
      if (element.id === id) {
        element.checked = true;
      } else {
        element.checked = false;
      }
      return element;
    });
    setViewButtonsData(changedViewButtonsData);

    if (value === "Tiles") {
      setGridView(true);
    } else if (value === "List") {
      setGridView(false);
    }
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

  return (
    <S.MainContent>
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
      {/* <S.AllContent> */}
      <S.Title>All files</S.Title>
      {isLoading ? (
        <Loader />
      ) : (
        <UploadedFolders data={folders} gridView={gridView} />
      )}
      {/* </S.AllContent> */}
    </S.MainContent>
  );
};

export default MainContent;
