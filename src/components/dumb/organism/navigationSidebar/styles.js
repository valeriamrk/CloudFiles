import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Sidebar = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #2b7a78;
  height: 100vh;
  background-color: #def2f1;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  height: 40px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #3aafa9;
    ${Links} {
      color: #feffff;
    }
    ${Icons} {
      color: #feffff;
    }
  }
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#d1e8e2" : "")};
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
`
export const PremiumContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 24px;
`
export const TextContainer = styled.div`
margin-top: 8px;
font-size: 12px;
`
