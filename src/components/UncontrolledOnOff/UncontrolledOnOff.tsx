import React, {useState} from "react";


type UncontrolledOnOffPropsType = {
    onChange: (on:boolean)=> void
}

export function UncontrolledOnOff(props:UncontrolledOnOffPropsType) {

   let [on,setOn] = useState(false)

    const onStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft:"2px",
        backgroundColor:  on ?  "white" :"red"
    };
    const IndicatorStyle = {
        width: "30px",
        height: "20px",
        padding: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"5px",
        backgroundColor: on ? "green" :"red"
    }

    const onClicked = () => {
       setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}