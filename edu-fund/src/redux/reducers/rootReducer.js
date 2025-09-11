import { combineReducers } from 'redux';
import scholarshipsReducer from './scholarshipReducer';
import applicationReducer from './applicationReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  scholarships: scholarshipsReducer,
  application: applicationReducer,
  theme: themeReducer,
});


export default rootReducer;