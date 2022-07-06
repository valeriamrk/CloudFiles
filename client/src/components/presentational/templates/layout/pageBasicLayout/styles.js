import styled from "styled-components/macro";

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 2fr 7fr 3fr;
  grid-template-areas: "n h r" "n c r";
  width: 100%;
  margin: 0 auto;
  background-image: url(https://i.pinimg.com/originals/fd/5f/49/fd5f4931851710933077c2e835ae0b2f.jpg);
  background-image: url(https://w.wallha.com/ws/13/TdlpIBW2.jpg);
  /* background-image: url(https://img5.goodfon.ru/wallpaper/original/1/c8/abstraktsiia-zheltyi-fioletovyi-goluboi-tsveta.jpg); */
  background-size: cover;
  background-position: start;
`;

export const Header = styled.div`
  grid-area: h;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border-bottom: 0.3px solid #C9CCD5; */
`;

export const Sidebar = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  /* background-color: #def2f1;
  background-color: #E8F9FD;
  background-color: #F7F5F2; */
  /* border-right: 0.3px solid #C9CCD5; */
  width: 100%;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
/* border-radius: 30px; */
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
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
  border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
`;

export const Content = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  width: 100%;
  /* height: 660px; */
  /* background-color: #feffff; */
  /* border-left: 0.3px solid #C9CCD5;
  border-right: 0.3px solid #C9CCD5; */
  /* background-image: url(https://img.freepik.com/free-vector/gradient-glassmorphism-background_23-2149447863.jpg?w=2000);
  background-image: url(https://images.ua.prom.st/2862757820_w1366_h546_2862757820.jpg); */
`;
