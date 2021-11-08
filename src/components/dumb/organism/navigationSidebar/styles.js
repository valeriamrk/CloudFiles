import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2b7a78;
  height: 100%;
  background-color: #def2f1;
  /* background-color: lightyellow; */
`;

export const UserName = styled.div`
  margin: 16px;
  margin-bottom: 24px;
`;

/* export const List = styled.ul`
  list-style: none;
  padding-left: 16px;
  padding-bottom: 16px;
`

export const ListItem = styled.li`
  padding-left: 16px;
  padding-bottom: 16px;
  &:hover {
    color: #FEFFFF;
    background-color: #3AAFA9;
  }
` */

export const Links = styled(NavLink)`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* padding-left: 16px;
  padding-bottom: 16px; */
  text-decoration: none;
  color: black;
  /* &:hover {
    color: #FEFFFF; */
    /* background-color: #3AAFA9; */
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 36px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #3aafa9;
    ${Links} {
      color: #feffff;
    }
  };
  cursor: pointer;
`;
