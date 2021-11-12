import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";

const NavigationSidebar = (props) => {
  const { arrayOfLinks } = props;

  return (
    <S.Sidebar>
      <S.LinksContainer>
      <S.UserName>User Name</S.UserName>
      <S.LinksWrapper>
        <S.Icons>
          <BsFolder />
        </S.Icons>
        <S.Links to="/allfiles">All files</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Icons>
          <BsImage />
        </S.Icons>
        <S.Links to="/photos">Photos</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Icons>
          <BsPersonPlus />
        </S.Icons>
        <S.Links to="/sharedfiles">Shared files</S.Links>
      </S.LinksWrapper>
      <S.LinksWrapper>
        <S.Icons>
          <BsBucket />
        </S.Icons>
        <S.Links to="/recyclebin">Recycle bin</S.Links>
      </S.LinksWrapper>
      </S.LinksContainer>

      {/* Для универсальности, сделать потом 
      {arrayOfLinks.map(() => {
        <S.LinksWrapper>
          <S.Links to="/"></S.Links>
        </S.LinksWrapper>
      })} */}
      <S.BottomContent>
<div>button premium</div>
<div>text</div> 
<div>some link</div>
</S.BottomContent>
    </S.Sidebar>
  );
};

export default NavigationSidebar;
