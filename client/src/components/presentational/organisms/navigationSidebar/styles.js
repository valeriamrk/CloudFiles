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
  width: 100%;

`;

export const UserName = styled.div`
  margin: 16px 0px 24px 24px;
`;

export const Icons = styled.div`
  padding-right: 10px;
  height: 100%;
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
  /* padding-left: 24px; */
  height: 40px;
  width: 100%;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #d1e8e2;
  };
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#3aafa9" : "")};
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
