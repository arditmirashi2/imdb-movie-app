import React, { useRef } from 'react';
import {
  Col,
  Collapse,
  Input,
  Row,
  Select,
  DatePicker,
  Space,
  Form,
  Button,
  Badge,
  Avatar,
  FormInstance,
} from 'antd';
import { movieGenres, userRatings } from '../../constants/data';
import './FormFilter.css';
import { useDispatch } from 'react-redux';
import { fetchMoviesByFiltersAsync } from '../../redux/slices/movie/movieSlice';

const { RangePicker } = DatePicker;

const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form;

export function FilterForm() {
  const formRef = useRef<FormInstance<any>>(null);
  const dateFilterFormat = 'YYYY-MM-DD';

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(
      fetchMoviesByFiltersAsync({
        ...data,
        release_date:
          data.release_date &&
          `${data.release_date[0]?.format(
            dateFilterFormat,
          )},${data.release_date[1]?.format(dateFilterFormat)}`,
        count: '250',
        groups: 'top_250',
      }),
    );
  };

  const resetFilters = () => {
    if (formRef.current) formRef.current.resetFields();

    dispatch(fetchMoviesByFiltersAsync({ count: '250', groups: 'top_250' }));
  };

  return (
    <div className="form-filter-container">
      <h2>Filter by criterias</h2>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onSubmit}
        ref={formRef}
      >
        <Item label="Title" name="title">
          <Input placeholder="Search a movie by title" />
        </Item>
        <Item label="Keyword" name="keywords">
          <Input placeholder="Search for a notable object, concept, style or aspect." />
        </Item>
        <Item label="Genres" name="genres">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Select genres"
          >
            {movieGenres.map(movieGenre => {
              return <Option key={movieGenre.value}>{movieGenre.label}</Option>;
            })}
          </Select>
        </Item>

        <Item label="Release Date" name="release_date">
          <RangePicker />
        </Item>
        <Item label="User Rating" name="user_rating">
          <Select
            allowClear
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select rating"
          >
            {userRatings.map(userRating => {
              return <Option key={userRating.value}>{userRating.label}</Option>;
            })}
          </Select>
        </Item>
        <Row gutter={12}>
          <Col>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Col>
          <Col>
            <Button type="default" onClick={resetFilters}>
              Reset filters
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
