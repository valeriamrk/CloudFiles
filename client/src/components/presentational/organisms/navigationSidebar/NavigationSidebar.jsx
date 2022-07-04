import React from "react";
import * as S from "./styles";
import { Box, Flex, MyButton, Logo } from "../../../presentational";
import { IoDiamondOutline } from "react-icons/io5";
import { ProgressBar } from "../../../presentational";
import { useNavigate } from "react-router-dom";

const NavigationSidebar = (props) => {
  const { sidebarLinks, handleModalState } = props;

  // const history = useHistory();
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index, path) => {
    console.log("click");
    setSelectedIndex(index);
    // history.push(path);
    navigate(path);
  };

  return (
    <S.Sidebar>
      <S.LinksContainer>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        {sidebarLinks.map((element, index) => (
          <S.LinksWrapper
            onClick={(event) => handleListItemClick(event, index, element.path)}
            selected={selectedIndex === index}
          >
            <Box ml={24}>
              <Flex>
                <S.Icons src={element.icon} alt="icon"/>
                <S.NavMenuItemLabel>{element.label}</S.NavMenuItemLabel>
                {/* <S.Links to={element.path}> {element.label}</S.Links> */}
              </Flex>
            </Box>
          </S.LinksWrapper>
        ))}
      </S.LinksContainer>

      <S.BottomContent>
        <S.PremiumContainer>
          <MyButton
            startIcon={<IoDiamondOutline />}
            premium={"premium"}
            clickButton={() => handleModalState({ id: 3 })}
          >
            Buy Premium Cloud
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

export { NavigationSidebar };
