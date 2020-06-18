import { createStore, combineReducers } from 'redux'
import listReducer from './reducers/listReducer'

const rootReducer = combineReducers({
  items: listReducer
})

export default createStore(rootReducer)
