import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Raiting, RatingValueType} from "./Raiting";

export default {
    title: 'Rating stories',
    component: Raiting,
}

export const EmptyRating1 = () =><Raiting value={1} onClickHandler={v=>v}/>
export const Rating2 = () =><Raiting value={2} onClickHandler={v=>v}/>
export const Rating3 = () =><Raiting value={3} onClickHandler={v=>v}/>
export const Rating4 = () =><Raiting value={4} onClickHandler={v=>v}/>
export const Rating5 = () =><Raiting value={5} onClickHandler={v=>v}/>
export const RatingChanges = () => {
    const [rating,setRating]= useState<RatingValueType>(2)
    return<Raiting value={rating} onClickHandler={setRating}/>
}
