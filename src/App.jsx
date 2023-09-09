import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchCustomers } from './asyncActions/fetchCustomers'
import {
	addCashAction,
	asyncAddCashAction,
	asyncGetCashAction,
	getCashAction,
} from './store/reducers/cashReducer'
import {
	addCustomerAction,
	fetchCustomersAction,
	removeCustomerByIdAction,
	removeCustomerByNameAction,
} from './store/reducers/customerReducer'

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cashReducer.cash)
	const customers = useSelector(state => state.customerReducer.customers)

	const addCash = cash => {
		dispatch(addCashAction(cash))
	}

	const getCash = cash => {
		dispatch(getCashAction(cash))
	}

	const addCustomer = name => {
		const customer = {
			id: Date.now(),
			name,
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomerByName = name => {
		dispatch(removeCustomerByNameAction(name))
	}

	const removeCustomerById = id => {
		dispatch(removeCustomerByIdAction(id))
	}

	return (
		<div>
			<h1>Balance: {cash}</h1>
			<div>
				<button onClick={() => addCash(Number(prompt()))}>Top up</button>
				<button onClick={() => getCash(Number(prompt()))}>Withdraw</button>
			</div>
			<div>
				<button onClick={() => addCustomer(prompt())}>Add Customer</button>
				<button onClick={() => removeCustomerByName(prompt())}>
					Remove Customer
				</button>
			</div>
			<div>
				<button onClick={() => dispatch(fetchCustomers())}>
					Fetch Customers From DB
				</button>
				<button onClick={() => dispatch(asyncAddCashAction())}>
					Async Increment
				</button>
				<button onClick={() => dispatch(asyncGetCashAction())}>
					Async Decrement
				</button>
			</div>
			<div>
				<button onClick={() => dispatch(fetchCustomersAction())}>
					Fetch Customers Saga
				</button>
			</div>
			{customers.length ? (
				<div>
					{customers.map((customer, index) => (
						<div key={index} onClick={() => removeCustomerById(customer.id)}>
							{customer.name}
						</div>
					))}
				</div>
			) : (
				<div>There are no customers</div>
			)}
		</div>
	)
}

export default App
