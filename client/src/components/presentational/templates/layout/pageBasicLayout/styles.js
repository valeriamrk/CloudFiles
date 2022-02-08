import styled from "styled-components/macro";

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 44px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-template-areas: "h h" "n c";
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  grid-area: h;
  /* line-height: 44px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3aafa9;
  width: 100%;
`;

export const Sidebar = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #2b7a78;
  height: 100%;
  background-color: #def2f1;
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
`;
