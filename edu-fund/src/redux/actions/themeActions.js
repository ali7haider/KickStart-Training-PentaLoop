import { TOGGLE_THEME, SET_THEME } from './actionTypes';

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME
  };
};

export const setTheme = (isDark) => {
  return {
    type: SET_THEME,
    payload: isDark
  };
};