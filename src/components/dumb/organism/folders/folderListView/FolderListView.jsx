import React from "react";
import FolderListViewItem from "./FolderListViewItem";
import * as S from "./styles";

const FolderListView = (props) => {
  const { data } = props;

  return (
    <S.ListView>
      {data.map((element) => (
        <FolderListViewItem id={element.id} name={element.title} />
      ))}
    </S.ListView>
  );
};

export default FolderListView;