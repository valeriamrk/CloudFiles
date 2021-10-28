import {
  InfoCircleOutlined,
  PlusOutlined,
  SortAscendingOutlined,
  TableOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import DropdownBtnView from "../../../atoms/DropdownBtnView";
import MyButton from "../../../atoms/MyButton";
import NewFileDropdownBtn from "../../../atoms/NewFileDropdownBtn";
import SortDropdownBtn from "../../../atoms/SortDropdownBtn";
import UploadDropdownBtn from "../../../atoms/UploadDropdownBtn";
import MyDropdownBtn from "../../../atoms/ViewDropdownBtn";
import * as S from "../styles";

const CommandBar = () => {
  return (
    <S.CommandBar>
      <S.RightButtons>
        <NewFileDropdownBtn />
        <UploadDropdownBtn />
        {/* <Button icon={<PlusOutlined />}>New file</Button> */}
        {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
      </S.RightButtons>

      <S.LeftButtons>
        {/* <Button icon={<SortAscendingOutlined />}>Sort</Button> */}
        {/* <DropdownBtnView /> */}
        {/* <Button icon={<InfoCircleOutlined />}>Info</Button> */}
        <SortDropdownBtn />
        <MyDropdownBtn />
        <MyButton>Info</MyButton>
      </S.LeftButtons>
    </S.CommandBar>
  );
};

export default CommandBar;
