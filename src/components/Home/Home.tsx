import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardListContainer from '../CardListContainer';
import {fetchMoviesAsync, selectMovieList, selectMovieListLoading, selectMovieListErrorMessage, Movie} from '../../redux/slices/movie/movieSlice';
import {Spin} from 'antd';
import FilterForm from '../FilterForm';
import {useNavigate} from 'react-router';
import "./Home.css";

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
    dispatch(fetchMoviesAsync())
  }, [])


  return <div className='home-container'> 
    <FilterForm />
    <div className='content-area-container'>
    {movieListLoading ? <Spin size='large'/> : <CardListContainer items={Array.isArray(movieList) ? movieList.map((movie: Movie) => ({
    meta: {
      title: movie.title,
      description: movie.description
    },
    hoverable: true,
    cover: movie.image,
    onClick: () => {
      navigate(`/movie/${movie.id}`)
    }
  })) : []}/>}
  </div>
  </div>
  
};
