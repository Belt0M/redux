import { addManyCustomersAction } from '../store/reducers/customerReducer'

export const fetchCustomers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => dispatch(addManyCustomersAction(json)))
	}
}
