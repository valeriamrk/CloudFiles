import MyHeader from "./components/dumb/organism/header/MyHeader";
import MainContent from "./components/dumb/organism/mainContent/MainContent";
import NavigationSidebar from "./components/dumb/organism/navigationSidebar/NavigationSidebar";
import "./App.css";
import { Route } from "react-router";
import Photos from "./components/pages/Photos";
import RecycleBin from "./components/pages/RecycleBin";
import SharedFiles from "./components/pages/SharedFiles";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const isAuth = true;

  return (
    <>
      {isAuth ? (
        <div className="App">
          <MyHeader />
          <NavigationSidebar />
          <div className="main-wrapper">
            <Route path="/allfiles" render={() => <MainContent />} />
            <Route path="/photos" render={Photos} />
            <Route path="/sharedfiles" render={SharedFiles} />
            <Route path="/recyclebin" render={RecycleBin} />
          </div>
        </div>
      ) : (
        <div className="loginPage">
          <LoginPage />
        </div>
      )}

      {/* <Footer/> */}
    </>
  );
}

export default App;
