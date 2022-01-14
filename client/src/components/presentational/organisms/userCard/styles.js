import styled from "styled-components/macro";

export const Avatar = styled.img`
  width: 100px;
  margin: 16px 16px 16px 0;
`;
export const UserCardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  background-color: white;
  width: 320px;
  position: absolute;
  top: 44px;
  right: 44px;
  z-index: 1000000;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.popupOpen ? "1" : "0")};
  transition: 0.3s;
  pointer-events: ${(props) => (props.popupOpen ? "all" : "none")};
  display: ${(props) => (props.popupOpen ? "flex" : "none")};
`;
export const Username = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 16px;
`;
