import movieReducer from './slices/movie/movieSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;
