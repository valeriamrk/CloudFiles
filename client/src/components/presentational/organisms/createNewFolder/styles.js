import styled from "styled-components/macro";

export const CreateNewFolderBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  background-color: white;
  width: 320px;
  position: fixed;
  top: 30%;
  left: 40%;
  /* z-index: 1000000; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
  /* opacity: ${(props) => (props.popupOpen ? "1" : "0")}; */
  /* transition: 0.3s;
  pointer-events: ${(props) => (props.popupOpen ? "all" : "none")};
  display: ${(props) => (props.popupOpen ? "flex" : "none")}; */
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
`;
export const Field = styled.div`
  margin-bottom: 12px;
`;
