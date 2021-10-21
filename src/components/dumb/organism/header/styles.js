import styled from "styled-components";
import { Button } from 'antd'
import Search from 'antd/lib/input/Search'



export const Header = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: lightblue;
padding-right: 8px;
padding-left: 8px;
`
export const MyButton = styled(Button) `
`
export const MySearch = styled(Search) `
width: 250px;
`
export const Logo = styled.img `
width: 70px;
margin-left: 20px;
`

export const BtnRight = styled.div `
display: flex;
justify-content: space-between;
width: 100px;
`


