import axios from "axios";
import React, { useEffect, useState } from "react";
import FolderGridView from "../../../folders/folderGridView/FolderGridView";
import FolderListView from "../../../folders/folderListView/FolderListView";
import * as S from "./styles";

const UploadedFolders = (props) => {
  const {
    gridView,
    fakeListViewArray,
    dropdownButtonsData,
    sortFilter,
    checkFile,
  } = props;

  return (
    <S.UploadedContent>
      {gridView ? (
        <FolderGridView
          data={fakeListViewArray}
          sortFilter={sortFilter}
          checkFile={checkFile}
        />
      ) : (
        <FolderListView
          dropdownButtonsData={dropdownButtonsData}
          data={fakeListViewArray}
          sortFilter={sortFilter}
          checkFile={checkFile}
        />
      )}
    </S.UploadedContent>
  );
};

export default UploadedFolders;
