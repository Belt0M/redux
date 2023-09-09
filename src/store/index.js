import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootWatcher } from '../saga'
import { cashReducer } from './reducers/cashReducer'
import { customerReducer } from './reducers/customerReducer'

const rootReducer = combineReducers({ cashReducer, customerReducer })

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootWatcher)
