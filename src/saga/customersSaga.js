import { call, put, takeEvery } from 'redux-saga/effects'
import {
	FETCH_CUSTOMERS,
	addManyCustomersAction,
} from '../store/reducers/customerReducer'
const fetchCustomersFromApi = () =>
	fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchCustomersWorker() {
	const data = yield call(fetchCustomersFromApi)
	const json = yield call(() => new Promise(res => res(data.json())))
	yield put(addManyCustomersAction(json))
}

export function* fetchCustomersWatcher() {
	yield takeEvery(FETCH_CUSTOMERS, fetchCustomersWorker)
}
