import { types } from "../types/types"

export function random(state = {
    result: {}
}, action) {
    switch (action.type) {
        case types.randomResult: {
            return { result: action.data }
        }
        default: return state
    }
}