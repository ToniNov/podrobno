import React from "react";

type OnOffPropsType = {
    on:boolean
    onChange: (on:boolean) => void
}

export function OnOff(props:OnOffPropsType) {

    const onStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft:"2px",
        backgroundColor:  props.on ?  "white" :"red"
    };
    const IndicatorStyle = {
        width: "30px",
        height: "20px",
        padding: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"5px",
        backgroundColor: props.on ? "green" :"red"
    }


    return (
        <div>
            <div style={onStyle}
                 onClick={() => {props.onChange(true) }}>ON</div>
            <div style={offStyle}
                 onClick={() => {props.onChange(false) }}>OFF</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}