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

export const ControledInput = () => {
    const [parentValue,setParentValue]=useState('')

    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControledCheckbox = () => {
    const [parentValue,setParentValue]=useState(true)

    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControledSelect = () => {
    const [parentValue,setParentValue]=useState<string | undefined>("1")

    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Moscowe</option>
    </select>
}



/*export const ControlledInputWithFixedValue=()=> <input value={'Hello user!!!'}/>*/


