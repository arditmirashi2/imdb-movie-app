import React, { useEffect } from 'react';
import { Col, Rate, Row, Spin, Tag, Empty } from 'antd';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovieAsync,
  selectActiveMovie,
  selectActiveMovieErrorMessage,
  selectActiveMovieLoading,
} from '../../redux/slices/movie/movieSlice';
import './Movie.css';

export function Movie() {
  const dispatch = useDispatch();

  const activeMovie = useSelector(selectActiveMovie);
  const activeMovieLoading = useSelector(selectActiveMovieLoading);
  const activeMovieErrorMessage = useSelector(selectActiveMovieErrorMessage);

  const params = useParams();

  useEffect(() => {
    if (params.movieId) {
      dispatch(fetchMovieAsync(params.movieId));
    }
  }, [params.movieId]);

  return (
    <div className="movie-container">
      {activeMovieLoading ? (
        <div className="loading-container">
          <Spin />
        </div>
      ) : activeMovie?.errorMessage && activeMovie?.errorMessage?.length > 0 ? (
        <Empty />
      ) : (
        <Row>
          <Col span={8} offset={1}>
            <div className="image-container">
              <img
                alt={activeMovie?.fullTitle}
                width="85%"
                src={activeMovie?.image}
              />
            </div>
          </Col>
          <Col span={12} offset={1}>
            <div className="content-container">
              <h1>{activeMovie?.fullTitle}</h1>
              <hr />
              <strong> Description: </strong>
              <p>{activeMovie?.plot}</p>
              <hr />
              <div className="genres">
                <span className="genresTitle">
                  <strong>Genres: </strong>
                </span>
                {activeMovie?.genreList?.map(genre => {
                  return <Tag>{genre.value}</Tag>;
                })}
              </div>
              <Rate className="rate" value={Number(activeMovie?.imDbRating)} />
              <hr />
              <div className="cast">
                <strong> Main Cast: </strong>
                <ul>
                  {activeMovie?.starList?.map(star => {
                    return <li>{star.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
