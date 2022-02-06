import "./App.scss";
import ConverterContainer from "./components/converter-container/ConverterContainer";
import HeaderBar from "./components/header-bar/HeaderBar";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <HeaderBar />
      </div>

      <div className="ConverterContainer">
        <ConverterContainer />
      </div>
    </div>
  );
}

export default App;
