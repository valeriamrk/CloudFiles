import { Button, Layout } from "antd";
import "antd/dist/antd.css";
import MyHeader from "./components/dumb/organism/header/MyHeader";
import MainContent from "./components/dumb/organism/mainContent/MainContent";
import NavigationSidebar from "./components/dumb/organism/navigationSidebar/NavigationSidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyHeader />
    <div className="main-wrapper">
      <NavigationSidebar />
      <MainContent />
    </div>
    </div>
  );
}

export default App;
