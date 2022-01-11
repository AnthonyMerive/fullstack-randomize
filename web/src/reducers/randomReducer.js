import { types } from "../types/types"

export function random(state = {
    result: {},
    list: {}
}, action) {
    switch (action.type) {
        case types.randomResult: {
            return { result: action.data }
        }
        case types.randomList: {
            return { ...state, list: action.list }
        }
        default: return state
    }
}