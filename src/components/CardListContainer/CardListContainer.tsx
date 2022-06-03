import React from 'react';
import { Row, Col } from 'antd';
import Card from '../Card';
import { ICard } from '../../models/common';
import "./CardListContainer.css"

interface CardListContainerProps {
  children?: any;
  items: Array<ICard>;
}

export function CardListContainer(props: CardListContainerProps) {
  const { items } = props;

  return (
    <div className='card-list-container'>
      {items.map((item: ICard, index: number) => {
        return <Card {...item} key={index}/>;
      })}
    </div>
  );
}
