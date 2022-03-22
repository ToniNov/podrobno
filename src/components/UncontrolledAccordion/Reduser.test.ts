import {reduser, StateType, TOGGLE_COLLAPSED} from "./Reduser";

test('collapsed should be true',()=>{

    const state:StateType = {
        collapsed:false
    }

    const newState = reduser(state,{type:TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false',()=>{

    const state:StateType = {
        collapsed:true
    }

    const newState = reduser(state,{type:TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(false)
})

test('error  collapsed',()=>{

    const state:StateType = {
        collapsed:true
    }

    expect(()=> {
        reduser(state,{type: "FAKETYPE"})
    }).toThrowError()

})