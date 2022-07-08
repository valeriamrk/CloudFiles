import styled from "styled-components";

export const MyModal = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.2);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 2;
/* transform: scale(1); */
opacity: ${props => props.modalActive ? "1" : "0"};
/* transition: 0.3s; */
pointer-events: ${props => props.modalActive ? "all" : "none"};
`

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
background-color: white;
border-radius: 20px;
/* width: 50%; */
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
background: rgba( 255, 255, 255, 0.7 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const CloseBtn = styled.div`
display: flex;
flex-direction: row;
align-self: flex-end;
`