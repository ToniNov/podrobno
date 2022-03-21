import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'Select stories',
    component: Select,
}


export const ExampleWithValue = () => {
    const [value, setValue] = useState(2)

    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Moscove'},
                ]}/>
    )
}

export const ExampleWithOutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Moscove'},
                ]}/>
    )
}
