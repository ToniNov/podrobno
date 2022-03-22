export type ActionType={
    type:string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const reduser = (state:StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCop = {...state}
            stateCop.collapsed = !state.collapsed
            return stateCop;
        default :
            throw new Error('Vse propalo')
    }
    return state;
}