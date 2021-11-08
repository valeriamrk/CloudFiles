import styled from "styled-components";

export const FolderImg = styled.img`
width: 50px;
`
export const Checkbox = styled.input`
display: block;
visibility: hidden;
`

export const ListView = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
/* padding: 15px; */
margin: 15px;
`
export const ListStyle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
&:hover {
    background-color: #DEF2F1;
    cursor: pointer;
    ${Checkbox} {
      visibility: visible
    };
  };
`