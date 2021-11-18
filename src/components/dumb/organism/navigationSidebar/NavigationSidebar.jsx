import React from "react";
import * as S from "./styles";
import MyButton from "../../atoms/MyButton";
import { IoDiamondOutline } from "react-icons/io5";
import { BsGift } from "react-icons/bs";
import ProgressBar from "../../atoms/ProgressBar";

const NavigationSidebar = (props) => {
  const { sidebarRoutes } = props;

  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log("click");
  };

  return (
    <S.Sidebar>
      <S.LinksContainer>
        <S.UserName>User Name</S.UserName>
        {sidebarRoutes.map((element, index) => (
          <S.LinksWrapper
            onClick={(event) => handleListItemClick(event, index)}
            selected={selectedIndex === index}
          >
            <S.Icons>{element.icon}</S.Icons>
            <S.Links to={element.path}> {element.label}</S.Links>
          </S.LinksWrapper>
        ))}
      </S.LinksContainer>

      <S.BottomContent>
        <S.PremiumContainer>
          <MyButton startIcon={<IoDiamondOutline />} premium={"premium"}>
            Buy premium Cloud
          </MyButton>
        </S.PremiumContainer>
        <S.ProgressBarContainer>
          <ProgressBar />
          <S.TextContainer>200Gb used from 1Tb</S.TextContainer>
        </S.ProgressBarContainer>
      </S.BottomContent>
    </S.Sidebar>
  );
};

export default NavigationSidebar;
