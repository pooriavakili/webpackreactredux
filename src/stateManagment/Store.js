import React from 'react'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
export const Reducer=combineReducers({})
export const Store=createStore(Reducer,applyMiddleware(thunk))
export default Store