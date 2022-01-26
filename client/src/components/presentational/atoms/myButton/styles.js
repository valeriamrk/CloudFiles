import styled from "styled-components/macro";

export const MyButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: none;
  color: black;
  height: 100%;
  padding: ${(props) => (props.justIcon ? "8px" : "4")};
  /* padding: ${props => props.padding || "4px"} */
  margin: 0;
  /* padding: 16px 8px 16px 8px; */
  border: ${(props) => (props.premium ? "0.5px solid black" : "none")};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.headerStyle ? "#45A29E" : "#d1e8e2")};
  }
`;

export const Icons = styled.div`
  padding-right: 4px;
  padding-left: 4px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  padding: 4px;
`;