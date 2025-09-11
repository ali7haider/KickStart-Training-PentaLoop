import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import { lightTheme, darkTheme } from "./themes/theme";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ScholarshipPage from "./pages/ScholarshipPage";
import ApplicationPage from "./pages/ApplicationPage";
import { SET_THEME } from "./redux/actions/actionTypes";
import Header from "./components/ui/Header/Navbar";
function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleThemeChange = (checked) => {
    dispatch(SET_THEME(checked));
  };
  const algorithm = darkMode
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{
        ...(darkMode ? darkTheme : lightTheme),
        algorithm: algorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header onThemeChange={handleThemeChange} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scholarships" element={<ScholarshipPage />} />
          <Route path="/apply" element={<ApplicationPage />} />
        </Routes>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
