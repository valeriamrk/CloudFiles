import styled from "styled-components";

export const BlocksWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
margin-top: 16px;
`

export const FirstBlock = styled.div `
display: flex;
justify-content: center;
margin-right: 20px;
width: 200px;
height: 30px;
padding: 16px;
background-color: #F87474;
border-radius: 10px;
&:hover {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );

`
export const SecondBlock = styled.div `
display: flex;
justify-content: center;
margin-right: 20px;
width: 200px;
height: 30px;
padding: 16px;
background-color: #FFB562;
border-radius: 10px;
&:hover {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );

`
export const ThirdBlock = styled.div `
display: flex;
justify-content: center;
width: 200px;
height: 30px;
padding: 16px;
background-color: #3AB0FF;
border-radius: 10px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
&:hover {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
`