import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import { lightTheme, darkTheme } from './themes';
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import ScholarshipPage from "./pages/ScholarshipPage";
import ApplicationPage from "./pages/ApplicationPage";
import { setTheme } from "./redux/actions/themeActions";
import Header from "./components/layout/Header/Navbar";
function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const algorithm = darkMode
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm;

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <ConfigProvider
        theme={{
          ...(darkMode ? darkTheme : lightTheme),
          algorithm: algorithm,
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scholarships" element={<ScholarshipPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
          </Routes>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
