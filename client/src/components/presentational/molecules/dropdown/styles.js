import styled from "styled-components/macro";
import { MyButton } from "../../atoms/myButton/styles";

export const DropdownListItem = styled.div`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: #d1e8e2;
  }
`;

export const Checked = styled.div`
  display: flex;
  align-items: flex-start;
  visibility: ${(element) => (element.checked ? "visible" : "hidden")};
  width: 16px;
  margin-right: 4px;
`;

export const DropdownContent = styled.div`
  position: absolute;
  width: 200px;
  background-color: #feffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
  display: ${(props) => (props.openDropdown ? "block" : "none")};
`;



export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;

  &:hover {
    ${MyButton} {
      /* background-color: #2B7A78; */
      background-color: #d1e8e2;
      /* color: #FEFFFF; */
    }
  }
`;