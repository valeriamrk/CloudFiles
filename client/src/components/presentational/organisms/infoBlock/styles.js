import styled from "styled-components";

export const BlocksWrapper = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin-top: 40px;
`

export const Block = styled.div `
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 200px;
background-color: #F7F5F2;
border-radius: 10px;
margin-bottom: 20px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
`
export const SecondBlock = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 200px;
background-color: #F7F5F2;
border-radius: 10px;
margin-bottom: 20px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
`

export const Chart = styled.img`
height: 80%;
`
export const Title = styled.span`
font-weight: 800;
`
