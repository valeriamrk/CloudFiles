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
  const [dropdownButtonsData, setDropdownButtonsData] = useState([
    { id: uuidv4(), value: "List", checked: false },
    { id: uuidv4(), value: "Tiles", checked: true },
  ]);

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
    const changedDropdownButtonsData = dropdownButtonsData.map((element) => {
      if (element.id === id) {
        element.checked = true;
      } else {
        element.checked = false;
      }
      return element;
    });
    setDropdownButtonsData(changedDropdownButtonsData);

    if (value === "Tiles") {
      setGridView(true);
    } else if (value === "List") {
      setGridView(false);
    }
  };

  return (
    <S.MainContent>
      <CommandBar
        changeView={changeView}
        dropdownButtonsData={dropdownButtonsData}
      />
      {/* <S.AllContent> */}
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
