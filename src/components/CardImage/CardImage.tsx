import React from 'react';

interface CardImageProps {
    children?: any;
    src: string;
    title: string;
}


export function CardImage(props: CardImageProps) {
    return <img src={props.src} alt={props.title} />
}