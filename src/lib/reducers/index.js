import { combineReducers } from 'redux'
import { TEXT } from './../actions'

export const updateText = (state = { data: '' }, action) => {
    console.log(action.type);
    switch (action.type) {
        case TEXT:
            console.log('ACTION:', action)
            console.log('ACTION-STATE:', state)
            return Object.assign({}, state, { data: action.data })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    updateText
})
export default rootReducer