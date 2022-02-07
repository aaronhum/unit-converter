import React, { useState, useEffect } from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "carbon-components-react";
import {
  Code32,
  Light32,
  BrightnessContrast32,
  Asleep32,
  AsleepFilled32,
} from "@carbon/icons-react";
import "./HeaderBar.scss";
import { useDispatch, connect } from "react-redux";
import { changeTheme } from "../../redux/actions/actions";

// document.documentElement.setAttribute("carbon-theme", theme); // "white" | "g10" | "g90" | "g100"

const HeaderBar = () => {
  // const [theme, setTheme] = useState("white");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTheme(theme));
    document.documentElement.setAttribute("carbon-theme", theme); // "white" | "g10" | "g90" | "g100"
  }, [theme]);

  return (
    <div>
      <Header aria-label="Header">
        <HeaderName prefix="Unit">Converter</HeaderName>
        <HeaderGlobalBar>
          {theme === "white" && (
            <HeaderGlobalAction
              aria-label="Light Theme"
              onClick={() => {
                setTheme("g10");
                document.documentElement.setAttribute("carbon-theme", "g10");
                dispatch(changeTheme("g10"));
              }}
            >
              <Light32 />
            </HeaderGlobalAction>
          )}
          {theme === "g10" && (
            <HeaderGlobalAction
              aria-label="Gray Theme"
              onClick={() => {
                setTheme("g90");
                document.documentElement.setAttribute("carbon-theme", "g90");
                dispatch(changeTheme("g90"));
              }}
            >
              <BrightnessContrast32 />
            </HeaderGlobalAction>
          )}
          {theme === "g90" && (
            <HeaderGlobalAction
              aria-label="Dark Theme"
              onClick={() => {
                setTheme("g100");
                document.documentElement.setAttribute("carbon-theme", "g100");
                dispatch(changeTheme("g100"));
              }}
            >
              <AsleepFilled32 />
            </HeaderGlobalAction>
          )}
          {theme === "g100" && (
            <HeaderGlobalAction
              aria-label="Darker Theme"
              onClick={() => {
                setTheme("white");
                document.documentElement.setAttribute("carbon-theme", "white");
                dispatch(changeTheme("white"));
              }}
            >
              <Asleep32 />
            </HeaderGlobalAction>
          )}
          <HeaderGlobalAction
            aria-label="See Source Code"
            href="https://github.com/aaronhum/unit-converter"
            tooltipAlignment="end"
          >
            <Code32 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(HeaderBar);
