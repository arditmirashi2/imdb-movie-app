import React from 'react';
import {Card as AntCard} from 'antd';
import { ICard } from "../../models/common";

const {Meta} = AntCard;

interface CardProps extends ICard {
    children?: any;
}


export function Card(props: CardProps) {
    return <AntCard onClick={props.onClick} cover={<img src={props.cover} alt={props.meta.title}></img>} hoverable={props.hoverable}>
        <Meta {...props.meta}></Meta>
    </AntCard>
}