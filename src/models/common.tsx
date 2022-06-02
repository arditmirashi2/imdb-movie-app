import { SyntheticEvent } from "react";

export interface ICard {
    meta: {
        title: string;
        description: string;
    },
    cover: string,
    hoverable: boolean,
    onClick: (event: SyntheticEvent<HTMLDivElement>) => void
}



export interface IRequestResponse {
    success: boolean;
    payload: any;
}