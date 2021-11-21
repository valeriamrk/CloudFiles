import React from "react";
import FolderListViewItem from "./FolderListViewItem";
import * as S from "./styles";
import MyButton from "../../../atoms/MyButton";
import MyDropdown from "../../../atoms/dropdown/MyDropdown";
import Checkbox from "../../../atoms/Checkbox";
import {
  BsChevronCompactDown,
  BsChevronDown,
  BsPlusSquare,
  BsUpload,
  BsGrid,
  BsSortDown,
} from "react-icons/bs";

const FolderListView = (props) => {
  const { data, dropdownButtonsData, sortFilter, checkFile } = props;

  return (
    <S.ListView>
      <S.HeaderStyle>
        <S.HeaderLeftContainer>
          <S.CheckboxContainer>
            <Checkbox/>
          </S.CheckboxContainer>
          <S.HeaderFolderImg
            src="https://s3.amazonaws.com/media-p.slid.es/uploads/644286/images/3450303/folder.png"
            alt="folder icon"
          />
          <MyDropdown
            buttonClick={sortFilter}
            dropdownButtonsData={dropdownButtonsData.sortButtonsData}
          >
            <S.HeaderTitle><div>Name</div> <BsChevronDown/> </S.HeaderTitle>
          </MyDropdown>
        </S.HeaderLeftContainer>
        <MyDropdown
          buttonClick={sortFilter}
          dropdownButtonsData={dropdownButtonsData.modifiedButtonsData}
        >
          <S.ModContainer>
          <S.HeaderModified><div>Modified</div> <BsChevronDown/></S.HeaderModified>
          </S.ModContainer>
        </MyDropdown>
        <MyDropdown
          buttonClick={sortFilter}
          dropdownButtonsData={dropdownButtonsData.sizeButtonsData}
        >
          <S.SizeContainer>
          <S.HeaderSize><div>Size</div> <BsChevronDown/></S.HeaderSize>
          </S.SizeContainer>
        </MyDropdown>
      </S.HeaderStyle>
      {data.map((element) => (
        <FolderListViewItem
          id={element.id}
          title={element.title}
          modified={element.modified}
          size={element.size}
          checkFile={checkFile}
        />
      ))}
    </S.ListView>
  );
};

export default FolderListView;
