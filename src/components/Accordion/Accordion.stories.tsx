import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('accordion mode change even generated')

export const ColapsedMode = () =><Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>
export const UncolapsedMode = () =><Accordion titleValue={"Menu"} collapsed={false} onChange={callback}/>

export const ModeChanges = () => {
    const [value,setValue]= useState<boolean>(true)
    return<Accordion titleValue={"Menu"} collapsed={value} onChange={()=>setValue(!value)}/>
}
