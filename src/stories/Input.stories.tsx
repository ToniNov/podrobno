import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input',
    //component: Input,
}

export const UncontroledInput = () => <input/>;

export const TrackValueOfUncontroledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const activalValue = event.currentTarget.value;
        setValue(activalValue)
    }

    return <><input onChange={onChange}/>-{value}-</>
}

export const GetValueOfUncontroledInputByButtonProps = ()=> {
    const [value,setValue]=useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = ()=> {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef}/><button onClick={save}>Save</button> - active value: {value} </>
}

/*export const ControlledInputWithFixedValue=()=> <input value={'Hello user!!!'}/>*/
