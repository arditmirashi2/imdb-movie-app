import React from "react";
import { Col, Collapse, Input, Row, Select, Form } from "antd";

const {Panel} = Collapse;
const {Option} = Select
const {Item} = Form;

export function FilterForm() {

    return <Collapse>
    <Panel header="Filters" key="filters">
      {/* <Row gutter={[36, 36]}>
        <Col span={4}>
          <Input placeholder='Search a movie by title'/>
        </Col>
        <Col span={4}>
          <Select mode='multiple' allowClear      style={{ width: '100%' }}
      placeholder="Select genres">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select allowClear      style={{ width: '100%' }}
      placeholder="Select year">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>

        <Col span={4}>
          <Select allowClear      style={{ width: '100%' }}
      placeholder="Select rating">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>

        <Col span={4}>
          <Select allowClear      style={{ width: '100%' }}
      placeholder="Select companies">
        <Option key={"This is a key"}>Value</Option>
          </Select>
        </Col>
      </Row> */}

      <Form  name="basic"
      labelCol={{ span: 8 }}
    //   wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off">
          <Item label="Title" name="title" >
          <Input placeholder='Search a movie by title'/>
          </Item>
          <Item label="Genres" name="genres" >
          <Select mode='multiple' allowClear      style={{ width: '100%' }}
      placeholder="Select genres">
        <Option key={"This is a key"}>Value</Option>
          </Select>
          </Item>
      </Form>
      </Panel>
    </Collapse>
}