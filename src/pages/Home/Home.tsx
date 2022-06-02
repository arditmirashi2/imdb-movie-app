import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardListContainer from '../../components/CardListContainer';
import {fetchMoviesAsync, selectMovieList, selectMovieListLoading, selectMovieListErrorMessage, Movie} from '../../redux/slices/movie/movieSlice';
import {Spin, Collapse, Row, Col, Input, Select} from 'antd';
import {useNavigate} from 'react-router'

const {Panel} = Collapse;
const {Option} = Select;

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


  return<React.Fragment> 
    <Collapse>
    <Panel header="Filters" key="filters">
      <Row gutter={[36, 36]}>
        <Col span={4}>
          <h3>Title</h3>
          <Input placeholder='Search a movie by title'/>
        </Col>
        <Col span={4}>
          <h3>Genre</h3>
          <Select mode='multiple' allowClear      style={{ width: '100%' }}
      placeholder="Select genres">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>
        <Col span={4}>
          <h3>Year</h3>
          <Select allowClear      style={{ width: '100%' }}
      placeholder="Select year">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>

        <Col span={4}>
          <h3>Rating</h3>
          <Select allowClear      style={{ width: '100%' }}
      placeholder="Select rating">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>

        <Col span={4}>
          <h3>Company</h3>
          <Select allowClear      style={{ width: '100%' }}
      placeholder="Select companies">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>
      </Row>
      </Panel>
    </Collapse>
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
  </React.Fragment>
};
