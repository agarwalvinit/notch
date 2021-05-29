import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import { Layout } from "antd";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

// Actions
import { fetchOrderSummaryAction } from "actions/orderActions";

// Styles
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderSummaryAction());
  }, [dispatch]);
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
