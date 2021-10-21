import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import * as S from './styles'


const NavigationSidebar = () => {
  return (
    <S.Sidebar>
      <div>User Name</div>
      <ul>
        <li>All files</li>
        <li>Photos</li>
        <li>Shared files</li>
        <li>Recycle bin</li>
      </ul>
    </S.Sidebar>
  );
};

export default NavigationSidebar;
