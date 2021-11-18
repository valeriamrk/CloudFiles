import axios from "axios";
import React, { useEffect, useState } from "react";
import FolderGridView from "../../../folders/folderGridView/FolderGridView";
import FolderListView from "../../../folders/folderListView/FolderListView";
import * as S from "./styles";

const UploadedFolders = (props) => {
  const { gridView, data,fakeListViewArray } = props;

  return (
    <S.UploadedContent>
      {gridView ? <FolderGridView data={data}/> : <FolderListView data={fakeListViewArray}/>}
    </S.UploadedContent>
  );
};

export default UploadedFolders;
