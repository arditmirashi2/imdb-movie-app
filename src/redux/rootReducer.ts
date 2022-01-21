import counterReducer from './slices/counter/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
