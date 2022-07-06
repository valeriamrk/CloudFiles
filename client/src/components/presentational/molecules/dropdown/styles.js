import styled from "styled-components/macro";

export const DropdownListItem = styled.div`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    box-shadow: 0 1px 10px 0 rgba(31, 38, 135, 0.37);
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
  width: 160px;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
  cursor: pointer;
  display: ${(props) => (props.openDropdown ? "block" : "none")};
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: ${(props) =>
      props.noHover ? "" : "0px 5px 10px 2px rgba(34, 60, 80, 0.2)"};
    -moz-box-shadow: ${(props) =>
      props.noHover ? "" : "0px 5px 10px 2px rgba(34, 60, 80, 0.2)"};
    box-shadow: ${(props) =>
      props.noHover ? "" : "0px 0px 10px 0px rgba(34, 60, 80, 0.2)"};
    border-radius: ${(props) => (props.noHover ? "" : "10px")};
  }
`;
