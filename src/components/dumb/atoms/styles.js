import styled from "styled-components";


// 1. Button

export const MyButton = styled.button`
  background-color: white;
  color: black;
  padding: 5px;
  border: none;
  margin-left: 2px;
  &:hover {
    background-color: #ddd
  }
  `

// 2. Dropdown button


export const DropdownBtn = styled.button`
  background-color: white;
  color: black;
  padding: 5px;
  border: none;
  margin-left: 2px;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

`;

export const DropdownLinks = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd
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
      background-color: #ddd;
    }
  }
`;

// 3. Input field
export const InputField = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`;