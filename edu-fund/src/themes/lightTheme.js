import { baseTheme } from "./baseTheme";

export const lightTheme = {
  ...baseTheme,
  token: {
    ...baseTheme.token,
    colorPrimary: "#1890ff",
    colorBgBase: "#ffffff",
    colorTextBase: "#000000",
    colorBorder: "#d9d9d9",
    colorBorderSecondary: "#f0f0f0",
  },
  components: {
    ...baseTheme.components,
    Layout: {
      ...baseTheme.components.Layout,
      headerBg: "#ffffff",
      bodyBg: "#ffffff",
      footerBg: "#ffffff",
      siderBg: "#ffffff",
    },
    Card: {
      ...baseTheme.components.Card,
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
      boxShadow: "none",
      boxShadowTertiary: "none",

    },
    Button: {
      ...baseTheme.components.Button,
      colorPrimary: "#1890ff",
      algorithm: true,
    },
    Input: {
      ...baseTheme.components.Input,
      colorBorder: "#d9d9d9",
      algorithm: true,
    },
  },
};
