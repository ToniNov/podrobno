import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('accordion mode change even generated')
const onClickCallback = action('some item was clicked')

export const ColapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UncolapsedMode = () =>
    <Accordion titleValue={"Menu"} collapsed={false} onChange={callback} onClick={onClickCallback}
               items={[
                   {title: "Видео", value: 1},
                   {title: "Картинки", value: 2},
                   {title: "Новости", value: 3},
                   {title: "Карты", value: 4},
               ]}/>

export const ModeChanges = () => {
    const [value,setValue]= useState<boolean>(true)
    return<Accordion titleValue={"Menu"}
                     collapsed={value}
                     onChange={()=>setValue(!value)}
                     onClick={(value)=>{alert(`You change ${value}`)}}
                     items={[
        {title: "Видео", value: 1},
        {title: "Картинки", value: 2},
        {title: "Новости", value: 3},
        {title: "Карты", value: 4},]}
    />
}
