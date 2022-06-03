import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardListContainer from '../CardListContainer';
import {
  fetchMoviesByFiltersAsync,
  selectMovieList,
  selectMovieListLoading,
  selectMovieListErrorMessage,
  Movie,
} from '../../redux/slices/movie/movieSlice';
import { Empty, Spin } from 'antd';
import FilterForm from '../FilterForm';
import { useNavigate } from 'react-router';
import './Home.css';

interface HomeProps {
  children: any;
}

export const Home: React.FunctionComponent<HomeProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieList = useSelector(selectMovieList);

  const movieListLoading = useSelector(selectMovieListLoading);

  const movieListErrorMessage = useSelector(selectMovieListErrorMessage);

  useEffect(() => {
    dispatch(
      fetchMoviesByFiltersAsync({
        groups: 'top_250',
        count: '250',
      }),
    );
  }, []);

  return (
    <div className="home-container">
      <FilterForm />
      <div className="content-area-container">
        {movieListLoading ? (
          <div className="loading-container">
            <Spin size="large" />
          </div>
        ) : movieList.length > 0 ? (
          <CardListContainer
            items={
              Array.isArray(movieList)
                ? movieList.map((movie: Movie) => ({
                    meta: {
                      title: movie.title,
                      description: movie.description,
                    },
                    hoverable: true,
                    cover: movie.image.replace('original', '640x720'),
                    onClick: () => {
                      navigate(`/movie/${movie.id}`);
                    },
                  }))
                : []
            }
          />
        ) : (
          <div className="empty-message-container">
            <Empty />
          </div>
        )}
      </div>
    </div>
  );
};
