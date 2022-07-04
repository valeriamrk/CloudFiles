import styled from "styled-components/macro";

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 2fr 7fr 3fr;
  grid-template-areas: "n h r" "n c r";
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  grid-area: h;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 0.3px solid #C9CCD5;
`;

export const Sidebar = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #def2f1;
  background-color: #E8F9FD;
  background-color: #F7F5F2;
  border-right: 0.3px solid #C9CCD5;
  width: 100%;
`;

export const SidebarRight = styled.div`
  grid-area: r;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  border-left: 0.3px solid #C9CCD5;
  width: 100%;
`;

export const Content = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  width: 100%;
  /* height: 100%; */
  /* height: 660px; */
  background-color: #feffff;
  border-left: 0.3px solid #C9CCD5;
  border-right: 0.3px solid #C9CCD5;

`;
