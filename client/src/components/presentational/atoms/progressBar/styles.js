import styled from "styled-components/macro";

// 4. Progress bar
export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  /* background-color: lightgray; */
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
  border-radius: 20px;
  margin-bottom: 8px;
`;

export const Bar = styled.div`
  width: 20%;
  height: 10px;
  /* background-color: #3aafa9; */
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;

`;
