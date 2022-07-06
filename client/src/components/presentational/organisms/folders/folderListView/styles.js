import styled from "styled-components/macro";

// 1. FolderListView

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 3;
  width: 460px;
  /* width: 100%; */
  /* padding: 8px 64px 8px 24px; */
`;
export const HeaderFolderImg = styled.img`
  visibility: hidden;
  width: 40px;
`;

export const HeaderTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 8px 0 8px 0;
`;

export const ModContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  padding: 8px 0 8px 0;
`;

export const HeaderModified = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-left: 16px;
  padding: 8px 0 8px 0;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  padding: 8px 0 8px 0;
`;

export const HeaderSize = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-left: 16px;
  padding: 8px 0 8px 0;
`;

export const HeaderIcon = styled.div`
  margin-left: 4px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 2px;
`;

// 2. FolderListViewItem

export const CheckboxContainer = styled.div`
  display: block;
  margin-left: 16px;
  /* visibility: hidden; */
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
`;

export const FolderImg = styled.img`
  width: 40px;
`;
export const Title = styled.div``;

export const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* padding: 8px 64px 8px 24px; */
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    background-color: #def2f1;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    cursor: pointer;
    ${CheckboxContainer} {
      visibility: visible;
    }
  }
  background: ${(props) => (props.checked ? "rgba(255, 255, 255, 0.4)" : "")};
  backdrop-filter: ${(props) => (props.checked ? "blur(4px)" : "")};
  -webkit-backdrop-filter: ${(props) => (props.checked ? "blur(4px)" : "")};
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 3;
  width: 460px;
`;

export const Modified = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
`;
export const Size = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
`;

export const Table = styled.table`
  margin-left: 40px;
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