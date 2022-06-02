import React from 'react';
import {Row, Col} from 'antd';
import Card from '../Card';
import {ICard} from '../../models/common'

interface CardListContainerProps {
    children?: any,
    items: Array<ICard>
}

export function CardListContainer(props: CardListContainerProps) {

  const {items} = props;

  return <Row gutter={[48, 48]}>
      {items.map((item: ICard, index: number) => {
        return <Col span={4} key={index}>
          <Card {...item}/>
        </Col>
      })}
  </Row>
}