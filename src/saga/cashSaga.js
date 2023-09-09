import { put, takeEvery } from 'redux-saga/effects'
import {
	ASYNC_ADD_CASH,
	ASYNC_GET_CASH,
	addCashAction,
	getCashAction,
} from '../store/reducers/cashReducer'
const delay = ms => new Promise(res => setTimeout(res, ms))

function* cashIncrementWorker() {
	yield delay(2000)
	yield put(addCashAction(1))
}

function* cashDecrementWorker() {
	yield delay(2000)
	yield put(getCashAction(1))
}

export function* cashWatcher() {
	yield takeEvery(ASYNC_ADD_CASH, cashIncrementWorker)
	yield takeEvery(ASYNC_GET_CASH, cashDecrementWorker)
}
