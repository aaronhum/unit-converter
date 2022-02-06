import React from "react";
import { Header, HeaderName } from "carbon-components-react";
import "./HeaderBar.scss";

const HeaderBar = () => {
  return (
    <div>
      <Header aria-label="Header">
        <HeaderName href="" prefix="Unit">
          Converter
        </HeaderName>
      </Header>
    </div>
  );
};

export default HeaderBar;
