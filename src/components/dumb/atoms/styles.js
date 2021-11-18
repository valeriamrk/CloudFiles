import styled from "styled-components/macro";

// 1. Button

export const MyButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: none;
  color: black;
  height: 100%;
  padding: ${(props) => (props.justIcon ? "16px" : "4")};
  margin: 0;
  /* padding: 16px 8px 16px 8px; */
  border: ${(props) => (props.premium ? "0.5px solid black" : "none")};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.headerStyle ? "#45A29E" : "#d1e8e2")};
  }
`;

// 2. Dropdown button

export const DropdownBtn = styled.button`
  display: flex;
  flex-direction: row;
  /* background-color: #FEFFFF; */
  background: none;
  color: black;
  padding: 16px 8px 16px 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 200px;
  background-color: #feffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
`;

export const DropdownListItem = styled.div`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: #def2f1;
  }
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;

  &:hover {
    ${DropdownContent} {
      display: block;
    }
    ${DropdownBtn} {
      /* background-color: #2B7A78; */
      background-color: #d1e8e2;
      /* color: #FEFFFF; */
    }
    ${MyButton} {
      /* background-color: #2B7A78; */
      background-color: #d1e8e2;
      /* color: #FEFFFF; */
    }
  }
`;

export const Checked = styled.div`
  /* visibility: hidden; */
  visibility: ${(element) => (element.checked ? "visible" : "")};
`;
export const Value = styled.div`
  padding: 4px;
`;
export const Icons = styled.div`
  padding-right: 4px;
  padding-left: 4px;
  height: 100%;
  display: flex;
  align-items: center;
`;

// 3. Input field
export const InputField = styled.input`
  width: 235px;
  height: 24px;
  outline: none;
  font-size: 13px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
`;

// 4. Progress bar
export const ProgressBar = styled.div`
  width: 100%;
  background-color: lightgray;
`;

export const Bar = styled.div`
  width: 20%;
  height: 4px;
  background-color: #3AAFA9;
`;
