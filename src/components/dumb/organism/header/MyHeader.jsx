import React from "react";

import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Search from "antd/lib/input/Search";
import * as S from "./styles";
import { HolderOutlined, QuestionCircleOutlined, ToolOutlined, UserOutlined } from "@ant-design/icons";
import { MainContent } from "../mainContent/styles";

const onSearch = (value) => console.log(value);

const MyHeader = () => {
  return (
    <S.Header>
      <div>
        <S.Logo src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700281-icon-40-clouds-256.png" alt="logo"/>
      </div>
      <S.MySearch placeholder="input search text" allowClear onSearch={onSearch}  />
      <S.BtnRight>
        <S.MyButton icon={<ToolOutlined />}></S.MyButton>
        <S.MyButton icon={<QuestionCircleOutlined />}></S.MyButton>
        <S.MyButton icon={<UserOutlined />}></S.MyButton>
      </S.BtnRight>
    </S.Header>
  );
};

export default MyHeader;
