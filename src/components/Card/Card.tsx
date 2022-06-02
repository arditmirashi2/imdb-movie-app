import React, { Suspense } from 'react';
import {Card as AntCard, Spin} from 'antd';
import { ICard } from "../../models/common";

const {Meta} = AntCard;

interface CardProps extends ICard {
    children?: any;
}


export function Card(props: CardProps) {

    const ImageImport =  React.lazy(() => import("../CardImage"))

    const LazyLoadedImage = (props: {src: string, title: string}) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <ImageImport src={props.src} title={props.title}/>
        </Suspense>
    }


    return <AntCard onClick={props.onClick} cover={<LazyLoadedImage src={props.cover} title={props.meta.title}/>} hoverable={props.hoverable}>
        <Meta {...props.meta}></Meta>
    </AntCard>
}