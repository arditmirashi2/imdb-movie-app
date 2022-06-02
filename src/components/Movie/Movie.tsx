import React from "react";
import { Col, Rate, Row } from "antd";

export function Movie() {
    return      <Row>
    <Col span={8} offset={1}>
    <img alt={"Name"} width='85%' />
  </Col>
  <Col span={12} offset={1}>
    <h1>Header</h1>
    <hr />
    <strong> Description: </strong>
    <p>Paragraph</p>
    <hr />
    <div className='genere'>
      <span className='genereTitle'>
        <strong>Generes: </strong>
      </span>
    </div>
    <Rate className='rate' value={5} />
    <hr />
    <div className='trailer'>
      <strong> Trailer: </strong>
    </div>
    {/* <YouTube videoId={this.state.videoId} /> */}
  </Col>
</Row>
}