import styled from "styled-components/macro";

export const MyButton = styled.button`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: none;
  color: black;
  font-weight: 600;
  height: 100%;
  margin: 0;
  border: none;
  font-size: 14px;
  cursor: pointer;
  -webkit-box-shadow: ${(props) =>
    props.primary ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
  -moz-box-shadow: ${(props) =>
    props.primary ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
  box-shadow: ${(props) =>
    props.primary ? "0px 0px 10px 0px rgba(34, 60, 80, 0.2)" : ""};
  background: ${(props) =>
    props.primary ? "rgba( 255, 255, 255, 0.25 )" : ""};
  border-radius: ${(props) => (props.primary ? "10px" : "")};
  padding: ${(props) => (props.primary ? "8px 4px" : "")};

  &:hover {
    -webkit-box-shadow: ${(props) =>
      props.primary ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
    -moz-box-shadow: ${(props) =>
      props.primary ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
    box-shadow: ${(props) =>
      props.primary ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
  }
`;

export const Icons = styled.div`
  padding-right: 4px;
  padding-left: 4px;
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  padding: 4px;
`;
