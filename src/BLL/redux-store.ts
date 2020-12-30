import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import convertReducer from "./convertReducer"
import thunkMiddleware from "redux-thunk";

export type RootReducerType = typeof rootReducer // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

let rootReducer = combineReducers({
   convertPage: convertReducer,
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

