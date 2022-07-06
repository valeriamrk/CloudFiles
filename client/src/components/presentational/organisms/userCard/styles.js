import styled from "styled-components/macro";

// 1. User card

export const MainContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 100%;
  padding-top: 16px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 99%;
`;

export const UsernameContent = styled.div`
  font-weight: 600;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 16px;
`;

export const Description = styled.div`
  margin-top: 4px;
  font-size: 12px;
`;

export const Icon = styled.div`
  font-size: 16px;
  cursor: pointer;
`;

// 2. User card menu

export const UserCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid black; */
  background-color: white;
  /* padding: 16px; */
  width: 250px;
  position: absolute;
  z-index: 1000000;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.popupOpen ? "1" : "0")};
  transition: 0.3s;
  pointer-events: ${(props) => (props.popupOpen ? "all" : "none")};
  display: ${(props) => (props.popupOpen ? "flex" : "none")};

`;

export const UserMenuItem = styled.div`
display: flex;
width: 100%;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0px 0px 7px -1px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 0px 7px -1px rgba(34, 60, 80, 0.2);
box-shadow: 0px 0px 7px -1px rgba(34, 60, 80, 0.2);
}
`;
