import styled from "styled-components";

export const DragArea = styled.div`
width: 100%;
width: 500px;
height: 100%;
border: 2px dashed rgba(34, 60, 80, 0.2);
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
margin-top: 36px;
margin-bottom: 36px;
height: 180px;

`
export const DragZone = styled.div`
width: 100%;
width: 500px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px dashed rgba(34, 60, 80, 0.2);
border-radius: 12px;
margin-top: 36px;
margin-bottom: 36px;
height: 180px;
`

export const DragImg = styled.img`
width: 40px;
margin-top: 16px;
margin-bottom: 16px;
`

export const DragText = styled.div`
font-size: 16px;
margin: 16px;

`
