import React from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "carbon-components-react";
import { Code32 } from "@carbon/icons-react";
import "./HeaderBar.scss";

// document.documentElement.setAttribute("carbon-theme", theme); // "white" | "g10" | "g90" | "g100"

const HeaderBar = () => {
  return (
    <div>
      <Header aria-label="Header">
        <HeaderName prefix="Unit">Converter</HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="See Source Code"
            href="https://github.com/aaronhum/unit-converter"
          >
            <Code32 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
};

export default HeaderBar;
