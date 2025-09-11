import { baseTheme } from './baseTheme';

export const darkTheme = {
  ...baseTheme,
  token: {
    ...baseTheme.token,
    colorPrimary: "#36CFC9",
    colorBgBase: "#141414",
    colorTextBase: "#E8E8E8",
    colorBorder: "#434343",
    colorBorderSecondary: "#303030",
  },
  components: {
    ...baseTheme.components,
    Layout: {
      ...baseTheme.components.Layout,
      headerBg: "#000408",
      bodyBg: "#0D1117",
      footerBg: "#0D1117",
      siderBg: "#0D1117",
    },
    Card: {
      ...baseTheme.components.Card,
      colorBgContainer: "#1a1a1a",
      colorBorderSecondary: "#303030",
    },
    Button: {
      ...baseTheme.components.Button,
      colorPrimary: "#36CFC9",
      algorithm: true,
    },
    Input: {
      ...baseTheme.components.Input,
      colorBorder: "#434343",
      algorithm: true,
    },
  },
};