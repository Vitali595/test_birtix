import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {dealsReducer} from "./reducers/dealsReducer"
import {companyReducer} from "./reducers/companyReducer"

const rootReducer = combineReducers({
    deals: dealsReducer,
    company: companyReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store