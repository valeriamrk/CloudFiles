import styled from "styled-components";

export const FolderImg = styled.img`
  width: 100px;
`;

export const Checkbox = styled.input`
display: block;
visibility: hidden;
align-self: flex-start;
margin-left: 15px;
`

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  /* padding: 15px; */
  margin: 15px;
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
  padding: 6px;
  &:hover {
    background-color: #def2f1;
    cursor: pointer;
    ${Checkbox} {
      visibility: visible
    };
  }
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


