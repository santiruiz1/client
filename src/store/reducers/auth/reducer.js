import types from "./types";

const reducer = (state = {}, action) => {
    switch(action.type) {
        case types.CHECK_USER: 
            return {
                user: action.payload
            }
        default: return state
    }
}

export default reducer;