import React from "react";

export type AccordionChangeType = boolean

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
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

    function AccordionBody() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
}

