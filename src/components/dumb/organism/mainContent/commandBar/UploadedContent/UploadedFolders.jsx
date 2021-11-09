import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../../../atoms/Loader";
import FolderGridView from "../../../folders/folderGridView/FolderGridView";
import FolderListView from "../../../folders/folderListView/FolderListView";
import * as S from "./styles";

const UploadedFolders = (props) => {
  const { gridView, data } = props;

  return (
    <S.UploadedContent>
      <S.Title>All files</S.Title>
      {gridView ? <FolderGridView data={data}/> : <FolderListView data={data} />}
    </S.UploadedContent>
  );
};

export default UploadedFolders;
