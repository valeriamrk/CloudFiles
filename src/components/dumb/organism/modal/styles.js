import styled from "styled-components";

export const MyModal = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
/* transform: scale(1); */
transform: ${props => props.modalActive ? "scale(1)" : "scale(0)"};
`

export const ModalContent = styled.div`
padding: 20px;
border-radius: 12px;
background-color: white;
width: 400px;
height: 200px;

`