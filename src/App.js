import "./App.scss";
import ConverterContainer from "./components/converter-container/ConverterContainer";
import HeaderBar from "./components/header-bar/HeaderBar";
import { connect } from "react-redux";

const App = (props) => {
  const { theme } = props;
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
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(App);
