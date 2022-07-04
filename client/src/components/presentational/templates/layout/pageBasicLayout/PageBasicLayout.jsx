import React from "react";
import * as S from "./styles";

const PageHeader = ({ children }) => {
  return <S.Header>{children}</S.Header>;
};

const PageSidebar = ({ children }) => {
  return <S.Sidebar>{children}</S.Sidebar>;
};

const PageSidebarRight = ({ children }) => {
  return <S.SidebarRight>{children}</S.SidebarRight>;
};
const PageContent = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

const PageLayout = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

const PageBasicLayout = PageLayout;
PageBasicLayout.PageHeader = PageHeader;
PageBasicLayout.PageSidebar = PageSidebar;
PageBasicLayout.PageSidebarRight = PageSidebarRight;
PageBasicLayout.PageContent = PageContent;

export { PageBasicLayout };
