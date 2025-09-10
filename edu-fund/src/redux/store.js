import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import scholarshipsReducer from './reducers/scholarshipReducer';
import applicationReducer from './reducers/applicationReducer';

const rootReducer = combineReducers({
  scholarships: scholarshipsReducer,
  application: applicationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;