import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { fetchMovieById, fetchMovies, fetchMovieTrailerById } from './movieApi';
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
  fullTitle?: string;
  videoUrl?: string;
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

export const fetchMovieAsync = createAsyncThunk("movie/fetchMovie", async (movieId: string) => {
  const response = await fetchMovieById(movieId);
  const trailerResponse = await fetchMovieTrailerById(movieId);
  return {generalInformationResponse: response, trailerResponse: trailerResponse};
})

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
          state.movieList.items = action.payload.payload;
          state.movieList.loading = false;
          state.movieList.errorMessage = null;
        } else {
          state.movieList.items = [];
          state.movieList.loading = false;
          state.movieList.errorMessage = action.payload.payload;
        }
      }).addCase(fetchMovieAsync.pending, state => {
        state.activeMovie.loading = true;
        state.activeMovie.errorMessage = null;
      })
      .addCase(fetchMovieAsync.fulfilled, (state, action) => {
        if(action.payload.generalInformationResponse.success) {
          state.activeMovie.item = {...action.payload.generalInformationResponse.payload, ...action.payload.trailerResponse.payload};
          state.activeMovie.loading = false;
          state.activeMovie.errorMessage = null;
        } else {
          state.activeMovie.item = null;
          state.activeMovie.loading = false;
          state.activeMovie.errorMessage = action.payload.generalInformationResponse.payload;
        }
      })
  },
});


export const selectMovieList = (state: RootState): Array<Movie> => state.movie.movieList.items;

export const selectMovieListLoading = (state: RootState): boolean => state.movie.movieList.loading;

export const selectMovieListErrorMessage = (state: RootState): string | null => state.movie.movieList.errorMessage;

export const selectActiveMovie = (state: RootState): Movie | null => state.movie.activeMovie.item;

export const selectActiveMovieLoading = (state: RootState): boolean => state.movie.activeMovie.loading;

export const selectActiveMovieErrorMessage = (state: RootState): string | null => state.movie.activeMovie.errorMessage;


export default movieSlice.reducer;
