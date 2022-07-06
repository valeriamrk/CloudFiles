import styled from "styled-components";

export const FolderImg = styled.img`
  width: 100px;
`;

export const CheckboxContainer = styled.div`
  display: block;
  align-self: flex-end;
  margin-right: 8px;

  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  /* padding: 15px; */
  /* margin: 16px 36px 36px 36px */
`;

export const GridStyle = styled.div`
  /* display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
margin: 15px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  margin: 8px;
  &:hover {
    background-color: #def2f1;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 5px;
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
    cursor: pointer;
    ${CheckboxContainer} {
      visibility: visible;
    }
  }
  background: ${(props) => (props.checked ? "rgba(255, 255, 255, 0.1)" : "")};
  box-shadow: ${(props) =>
    props.checked ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : ""};
  backdrop-filter: ${(props) => (props.checked ? "blur(4px)" : "")};
  -webkit-backdrop-filter: ${(props) => (props.checked ? "blur(4px)" : "")};
`;

export const FolderName = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  font-size: 14px;
`;

export const TextContainer = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 15px 0 15px;
`;

export const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 18px;
  margin-top: 40px;
`;