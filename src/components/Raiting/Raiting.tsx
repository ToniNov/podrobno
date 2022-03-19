import React from "react";

export type RatingValueType = 1 | 2 | 3 | 4 | 5;

type RaitingPropsType = {
    value: RatingValueType
    onClickHandler: (value:RatingValueType) => void
}
type StarPropsType = {
    selected: boolean
    onClick: (value:RatingValueType)=>void
    value:RatingValueType
}

export function Raiting(props: RaitingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClickHandler} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClickHandler} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClickHandler} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClickHandler} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClickHandler} value={5}/>
        </div>
    );
}

function Star(props:StarPropsType) {

    return <span onClick={()=>{
        debugger
        props.onClick(props.value)}}
    >{props.selected ? <b> ✭ </b> : "☆"}</span>


}