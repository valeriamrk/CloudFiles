import styled from "styled-components/macro";

// Input field
export const InputField = styled.input`
  width: 400px;
  height: 32px;
  border: none;
  outline: none;
  font-size: 13px;
  padding-left: 16px;
  padding: 8px 0 8px 16px;
  font-family: "Montserrat", sans-serif;
  border-radius: 40px;
  background: transparent;
  -webkit-box-shadow: ${(props) => (props.input ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : "")};
    -moz-box-shadow: ${(props) => (props.input ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : "")};
    box-shadow: ${(props) => (props.input ? "0px 0px 10px 0px rgba(34, 60, 80, 0.2)" : "")} ;
    background: ${(props) => (props.input ? "rgba( 255, 255, 255, 0.25 )" : "")} ;
    border-radius: ${(props) => (props.input ? "10px" : "")} ;
`; 
