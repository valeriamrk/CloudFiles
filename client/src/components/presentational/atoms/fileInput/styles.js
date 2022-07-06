import styled from "styled-components/macro";

export const FileInput = styled.input`
  display: none;
`;
export const Label = styled.label`
  /* background: none; */
  height: 100%;
  padding: 8px 16px;
  margin: 0;
  /* border: 0.5px solid black; */
  font-size: 14px;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 10px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;
