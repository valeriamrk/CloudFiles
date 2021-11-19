import styled from "styled-components/macro";

// 1. FolderListView

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  /* padding: 15px; */
  margin: 48px;
`;

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(237, 235, 233);
  padding: 0 64px 0 24px;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 3;
  width: 460px;
  /* height: 100%;
  width: 100%; */
  padding: 8px 64px 8px 24px;
  

  &:hover {
    background-color: #def2f1;
    cursor: pointer;
  }
`;
export const HeaderFolderImg = styled.img`
  visibility: hidden;
  width: 40px;
`;

export const HeaderTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0 8px 0;

`;

export const ModContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  padding: 8px 0 8px 0;

  &:hover {
    background-color: #def2f1;
    cursor: pointer;}
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

  &:hover {
    background-color: #def2f1;
    cursor: pointer;}
`;
export const HeaderSize = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-left: 16px;
  padding: 8px 0 8px 0;

`;

// 2. FolderListViewItem

export const Checkbox = styled.input`
  display: block;
  visibility: hidden;
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
  padding: 8px 64px 8px 24px;
  &:hover {
    background-color: #def2f1;
    cursor: pointer;
    ${Checkbox} {
      visibility: visible;
    }
  }
  border-bottom: 1px solid rgb(237, 235, 233);
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
