import styled from "styled-components/macro";

export const UploadedContent = styled.div`
  /* height: 400px; // временная заглушка, чтоб работал скролл
  overflow-y: scroll; */
  /* position: absolute; */
  /* top: 0;
bottom: 0; */
  /* display: flex;
justify-content: center;*/
  width: 95%;
  border: 0.3px solid #c9ccd5;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f7f5f2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50px;
  position: sticky;
  z-index: 500;
  top: 0;
  /* background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px); */
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 10px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const LeftButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Loader = styled.img`
  width: 50px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin: 36px 36px 16px 48px;
  /* margin-bottom: 8px; */
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 400px; // временная заглушка, чтоб работал скролл
`;
