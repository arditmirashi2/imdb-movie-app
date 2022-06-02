import React from 'react';
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
  Avatar
} from 'antd';
import {movieGenres} from '../../constants/data';
import "./FormFilter.css";

const { RangePicker } = DatePicker;

const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form;

export function FilterForm() {
  return (
    <div className='form-filter-container'>
       <h2>Filter by criterias</h2>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Item label="Title" name="title">
            <Input placeholder="Search a movie by title" />
          </Item>
          <Item label="Keyword" name="keyword">
            <Input placeholder="Search for a notable object, concept, style or aspect." />
          </Item>
          <Item label="Genres" name="genres">
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Select genres"
            >
              {movieGenres.map((movieGenre) => {
                return <Option key={movieGenre.value}>{movieGenre.label}</Option>
              })}
            </Select>
          </Item>
       
          <Item label="Release Date" name="releaseDate">
              <RangePicker />
          </Item>
          <Item label="User Rating" name="userRating">
          <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Select rating"
            >
              <Option key={'This is a key'}>Value</Option>
            </Select>
          </Item>
          <Button>Search</Button>
        </Form>
        </div>
  );
}
