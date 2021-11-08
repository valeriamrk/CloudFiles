import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";

const NavigationSidebar = (props) => {

  const { arrayOfLinks } = props

  return (
    <S.Sidebar>
      <S.UserName>User Name</S.UserName>
      <S.LinksWrapper>
        <S.Links to="/allfiles">All files</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Links to="/photos">Photos</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Links to="/sharedfiles">Shared files</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Links to="/recyclebin">Recycle bin</S.Links>
      </S.LinksWrapper>

        {/* Для универсальности, сделать потом 
      {arrayOfLinks.map(() => {
        <S.LinksWrapper>
          <S.Links to="/"></S.Links>
        </S.LinksWrapper>
      })} */}

      {/* <S.List>
        <S.ListItem>
          {" "}
          <S.Links to="/allfiles">All files</S.Links>
        </S.ListItem>
        <S.ListItem>
          {" "}
          <S.Links to="/photos">Photos</S.Links>
        </S.ListItem>
        <S.ListItem>
          {" "}
          <S.Links to="/sharedfiles">Shared files</S.Links>
        </S.ListItem>
        <S.ListItem>
          {" "}
          <S.Links to="/recyclebin">Recycle bin</S.Links>
        </S.ListItem>
      </S.List> */}
    </S.Sidebar>
  );
};

export default NavigationSidebar;
