import styled from "styled-components";
import { AiOutlineUpload } from "react-icons/ai"



// 1. Button

export const MyButton = styled.button`
  background-color: #FEFFFF;
  /* background-color: white; */
  color: black;
  border: none;
  margin-left: 4px;
  padding: 8px;
  font-size: 14px;
  &:hover {
    background-color: #2B7A78;
    /* background-color: #ddd */
    color: #EDEAE5
  };
  cursor: pointer;
  `

// 2. Dropdown button


export const DropdownBtn = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #FEFFFF;
  /* background: none; */
  color: black;
  padding: 8px;
  border: none;
  margin-left: 4px;
  font-size: 14px;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #FEFFFF;
  width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
`;

export const DropdownLinks = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    background-color: #DEF2F1
  }
`
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropdownContent} {
      display: block
    };
    ${DropdownBtn}{
      background-color: #2B7A78;
      color: #FEFFFF;
    }
  }
`;

export const Checked = styled.div`
`
export const Value = styled.div`
margin-left: 5px;
`

// 3. Input field
export const InputField = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
`;


