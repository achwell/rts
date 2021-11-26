import {Action} from "../actions";
import {ActionType} from "../action-types";

interface RepositoriesState {
    loading: boolean
    error?: string
    data: string[]
}

const INITIAL_STATE = {
    loading: false,
    error: undefined,
    data: []
}

const reducer = (state: RepositoriesState = INITIAL_STATE, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: undefined, data: []}
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: undefined, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.payload, data: []}
        default:
            return state
    }
}
export default reducer;