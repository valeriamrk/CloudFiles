import React from "react";
import FolderGridViewItem from "./FolderGridViewItem";
import * as S from "./styles";

const FolderGridView = (props) => {
  const { data, checkFile, filteredData } = props;
  if (!filteredData.length) {
    return <S.NotFound>Files not found</S.NotFound>;
  }

  return (
    <S.GridView>
      {filteredData.map((element) => (
        <FolderGridViewItem
          id={element.id}
          name={element.title}
          checkFile={checkFile}
          checked={element.checked}
        />
      ))}
    </S.GridView>
  );
};

export { FolderGridView };
