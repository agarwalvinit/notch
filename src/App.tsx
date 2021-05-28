import React from "react";

// Components
import { Layout } from "antd";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

// Styles
import "./App.scss";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <MainSection />
      </Layout>
    </>
  );
}

export default App;
