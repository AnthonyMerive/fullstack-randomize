import { types } from "../types/types"

export function view(state = {
    loading: false
}, action) {
    switch (action.type) {
        case types.viewLoading: {
            return {
                loading: true
            }
        }
        case types.viewLoaded: {
            return {
                loading: false
            }
        }
        default: return state
    }
}