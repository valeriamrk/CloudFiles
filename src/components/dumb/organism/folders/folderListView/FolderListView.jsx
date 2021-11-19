import React from "react";
import FolderListViewItem from "./FolderListViewItem";
import * as S from "./styles";
import MyButton from "../../../atoms/MyButton";
import MyDropdown from "../../../atoms/dropdown/MyDropdown";

const FolderListView = (props) => {
  const { data, dropdownButtonsData, sortFilter } = props;

  return (
    <S.ListView>
      <S.HeaderStyle>
        <S.HeaderLeftContainer>
          <S.Checkbox type="checkbox"></S.Checkbox>
          <S.HeaderFolderImg
            src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png"
            alt="folder icon"
          />
          <MyDropdown
            buttonClick={sortFilter}
            dropdownButtonsData={dropdownButtonsData.sortButtonsData}
          >
            <S.HeaderTitle>Name</S.HeaderTitle>
          </MyDropdown>
        </S.HeaderLeftContainer>
        <MyDropdown
          buttonClick={sortFilter}
          dropdownButtonsData={dropdownButtonsData.modifiedButtonsData}
        >
          <S.ModContainer>
          <S.HeaderModified>Modified</S.HeaderModified>
          </S.ModContainer>
        </MyDropdown>
        <MyDropdown
          buttonClick={sortFilter}
          dropdownButtonsData={dropdownButtonsData.sizeButtonsData}
        >
          <S.SizeContainer>
          <S.HeaderSize>Size</S.HeaderSize>
          </S.SizeContainer>
        </MyDropdown>
      </S.HeaderStyle>
      {data.map((element) => (
        <FolderListViewItem
          id={element.id}
          title={element.title}
          modified={element.modified}
          size={element.size}
        />
      ))}
    </S.ListView>
  );
};

export default FolderListView;
