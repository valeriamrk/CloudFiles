import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";


const NavigationSidebar = (props) => {

  const { arrayOfLinks } = props

  return (
    <S.Sidebar>
      <S.UserName>User Name</S.UserName>
      <S.LinksWrapper>
        <S.Icons><BsFolder/></S.Icons>
        <S.Links to="/allfiles">All files</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Icons><BsImage /></S.Icons>
        <S.Links to="/photos">Photos</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Icons>
          <BsPersonPlus/>
        </S.Icons>
        <S.Links to="/sharedfiles">Shared files</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Icons><BsBucket/></S.Icons>
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
