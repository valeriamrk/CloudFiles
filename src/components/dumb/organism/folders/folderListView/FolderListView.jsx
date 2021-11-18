import React from "react";
import FolderListViewItem from "./FolderListViewItem";
import * as S from "./styles";
import MyButton from "../../../atoms/MyButton"

const FolderListView = (props) => {
  const { data } = props;

  return (
    <S.ListView>
      {data.map((element) => (
        <FolderListViewItem id={element.id} title={element.title} modified={element.modified} size={element.size} />
      ))}
    </S.ListView>
  );
};

export default FolderListView;
