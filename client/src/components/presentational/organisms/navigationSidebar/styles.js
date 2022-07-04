import styled from "styled-components/macro";

export const Sidebar = styled.div`
  /* grid-area: n; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  /* background-color: #def2f1; */
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UserName = styled.div`
  margin: 16px 0px 24px 0px;
  font-weight: 600;
`;

export const Icons = styled.img`
  padding-right: 10px;
  width: 20px;
  display: flex;
  align-items: center;
`;

export const NavMenuItemLabel = styled.span`
  text-decoration: none;
  color: black;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 32px;
  height: 40px;
  width: 100%;
  text-decoration: none;
  color: black;
  &:hover {
    /* background-color: #d1e8e2; */
    font-weight: 600;
  };
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? "800" : "")};
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px 24px 24px 24px;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PremiumContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;
export const TextContainer = styled.div`
  margin-top: 8px;
  font-size: 12px;
`;
export const LogoWrapper = styled.div`
margin-top: 16px;
  margin-bottom: 48px;

`;

