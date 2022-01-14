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
opacity: ${props => props.modalActive ? "1" : "0"};
transition: 0.3s;
pointer-events: ${props => props.modalActive ? "all" : "none"};
`

export const ModalContent = styled.div`
padding: 20px;
border-radius: 12px;
background-color: white;
width: 50%;
/* height: 200px; */

`