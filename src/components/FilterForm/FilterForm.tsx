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

const { RangePicker } = DatePicker;

const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form;

export function FilterForm() {
  return (
    <Collapse>
      <Panel header="Filters" key="filters" extra={<Badge count={1}><div></div></Badge>}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"

        >
          <Row gutter={[20, 20]}>
            <Col span={5}>
          <Item label="Title" name="title">
            <Input placeholder="Search a movie by title" />
          </Item>
          </Col>
          <Col span={5}>
          <Item label="Keyword" name="keyword">
            <Input placeholder="Search for a notable object, concept, style or aspect." />
          </Item>
          </Col>
          <Col span={5}>
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
          </Col>
       
          <Col span={4}>
          <Item label="Release Date" name="releaseDate">
              <RangePicker />
          </Item>
          </Col>
          <Col span={4}>
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
          </Col>
          <Col span={1}>
          <Button>Search</Button>
          </Col>
          </Row>
        </Form>
      </Panel>
    </Collapse>
  );
}
