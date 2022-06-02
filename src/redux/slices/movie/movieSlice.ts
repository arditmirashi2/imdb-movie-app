import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { fetchMovies } from './movieApi';
import { IRequestResponse } from '../../../models/common';
import Movies from '../../../constants/data';

export interface Genre {
  key: string;
  value: string;
}

export interface Star {
  id: string;
  name: string;
}

export interface Movie {
  id: string;
  image: string;
  title: string;
  description: string;
  runTimeStr?: string;
  genres: string;
  genreList: Array<Genre>;
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  plot: string;
  stars: string;
  starList: Array<Star>;
}

export interface MovieState {
  movieList: {
    items: Array<Movie>,
    loading: boolean,
    errorMessage: string | null
  },
  activeMovie: {
    item: Movie | null,
    loading: boolean,
    errorMessage: string | null
  }
}

const initialState: MovieState = {
  movieList: {
    items: [],
    loading: false,
    errorMessage: null
  },
  activeMovie: {
    item: null,
    loading: false,
    errorMessage: null
  }
};

export const fetchMoviesAsync = createAsyncThunk(
  'movie/fetchMovies',
  async () => {
    const response = await fetchMovies();
    return response;
  },
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  },

  extraReducers: builder => {
    builder
      .addCase(fetchMoviesAsync.pending, state => {
        state.movieList.loading = true;
        state.movieList.errorMessage = null;
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        if(action.payload.success) {
          state.movieList.items = Movies as Array<Movie>;
          state.movieList.loading = false;
          state.movieList.errorMessage = null;
        } else {
          state.movieList.items = [];
          state.movieList.loading = false;
          state.movieList.errorMessage = action.payload.payload;
        }
      });
  },
});


export const selectMovieList = (state: RootState): Array<Movie> => state.movie.movieList.items;

export const selectMovieListLoading = (state: RootState): boolean => state.movie.movieList.loading;

export const selectMovieListErrorMessage = (state: RootState): string | null => state.movie.movieList.errorMessage;


export default movieSlice.reducer;
