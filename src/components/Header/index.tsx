import React, { FC } from "react";
import { Layout } from "antd";

// Styles
import "./index.scss";

const { Header } = Layout;

const HeaderComponent: FC = () => (
  <Header className="header--container flex-align--center">
    <img
      height="25"
      width="100"
      src="http://order.chefhero.com/static/chefhero/images/chefhero_logo_white.png"
      alt="logo"
    />
  </Header>
);

export default HeaderComponent;
