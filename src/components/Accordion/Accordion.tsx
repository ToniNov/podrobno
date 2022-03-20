import React from "react";

export type AccordionChangeType = boolean

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick:(value:any)=>void
}

export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )


type AccordionTitlePropsType = {
        title: string
        onChange: () => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return (
            <h3 onClick={(e)=> props.onChange()}>__{props.title}__</h3>
        )
    }
    type AccordionBodyPropsType = {
        items: Array<ItemType>
        onClick:(value:any)=>void
    }

    function AccordionBody(props:AccordionBodyPropsType) {
        return (
            <ul>
                {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        )
    }
}

