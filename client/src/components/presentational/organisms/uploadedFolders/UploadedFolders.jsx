import axios from "axios";
import React, { useEffect, useState } from "react";
import { FolderGridView } from "../..";
import { FolderListView } from "../..";
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

export { UploadedFolders };