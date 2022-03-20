import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}

const callback = action('accordion mode change even generated')

export const ColapsedMode = () =><UncontrolledAccordion titleValue={"Settings"} collapsed={true}/>
export const UncolapsedMode = () =><UncontrolledAccordion titleValue={"Settings"} collapsed={false}/>

