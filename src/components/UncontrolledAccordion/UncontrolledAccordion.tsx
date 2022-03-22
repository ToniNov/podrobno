import React, {useReducer} from "react";
import {reduser} from "./Reduser";


export type UncontrolledAccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}



export function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {
    console.log("Accordion rendered")

   // let [collapsed, setCollapsed] = useState(false)

    let [state, dispatch] = useReducer(reduser,{collapsed:false})

    return (
        <div>
           {/* <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type:"TOGGLE-COLLAPSED"})}}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

