import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
    /* grid-area: h; */
`

export const Header = styled.div `
    grid-area: h;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #3AAFA9;
`

export const Logo = styled.img `
margin-left: 24px;
width: 50px;
`

export const RightContainer = styled.div `
display: flex;
justify-content: space-between;
height: 100%;

`
export const LeftContainer = styled.div`
display: flex;
align-items: center;
height: 100%;
`

export const CenterContainer = styled.div `
display: flex;
justify-content: center;
height: 100%;

`