import { TOGGLE_THEME, SET_THEME } from '../actions/actionTypes';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('themePreference');
  return savedTheme ? JSON.parse(savedTheme) : false;
};

const initialState = {
  darkMode: getInitialTheme()
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newThemeState = !state.darkMode;
      localStorage.setItem('themePreference', JSON.stringify(newThemeState));
      return {
        ...state,
        darkMode: newThemeState
      };
      
    case SET_THEME:
      localStorage.setItem('themePreference', JSON.stringify(action.payload));
      return {
        ...state,
        darkMode: action.payload
      };
      
    default:
      return state;
  }
};

export default themeReducer;