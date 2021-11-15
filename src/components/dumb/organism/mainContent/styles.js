import styled from "styled-components/macro";


export const MainContent = styled.div`
grid-area: c;
display: flex;
flex-direction: column;
position: relative;
width: 100%;
/* height: 600px; */
/* border: 1px solid black; */
/* background-color: #fffffb; */
background-color: #FEFFFF;

`

export const AllContent = styled.div `

`

export const RightButtons = styled.div`
display: flex;
flex-direction: row;
height: 100%;

`
export const LeftButtons = styled.div`
display: flex;
flex-direction: row;
/* border: 1px solid black; */
height: 100%;

`
export const CommandBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 44px;
/* padding: 8px; */
/* background-color: #fffffb; */
background-color: #DEF2F1;
/* background-color: lightgray; */
border-bottom: 1px solid #2B7A78;

`

export const Title = styled.div`
font-size: 24px;
margin: 36px 36px 16px 48px;
/* margin-bottom: 8px; */

`

export const CommandMenu = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
height: 44px;
/* padding: 8px; */
/* background-color: #fffffb; */
background-color: #DEF2F1;
/* background-color: lightgray; */
border-bottom: 1px solid #2B7A78;

`