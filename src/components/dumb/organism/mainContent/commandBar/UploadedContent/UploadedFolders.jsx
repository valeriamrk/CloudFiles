import axios from "axios";
import React, { useEffect, useState } from "react";
import FolderGridView from "../../../folders/folderGridView/FolderGridView";
import FolderListView from "../../../folders/folderListView/FolderListView";
import * as S from "./styles";

const UploadedFolders = () => {

  
  useEffect(() => {
    sendGetRequest();
  },[]);

  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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


  return (
    <div>
      {/* {isLoading ? (
        <h3>loading</h3>
      ) : (
        <FolderGridView data={folders}/>
      )} */}
      {isLoading ? (
        <h3>loading</h3>
      ) : (
        <FolderListView data={folders}/>
      )}
    </div>
  );
};

export default UploadedFolders;
