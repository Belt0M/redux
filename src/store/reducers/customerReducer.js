const defaultState = {
	customers: [],
}

export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
export const REMOVE_CUSTOMER_BY_NAME = 'REMOVE_CUSTOMER_BY_NAME'
export const REMOVE_CUSTOMER_BY_ID = 'REMOVE_CUSTOMER_BY_ID'
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return { ...state, customers: [...state.customers, action.payload] }
		case 'ADD_MANY_CUSTOMERS':
			return {
				...state,
				customers: [...state.customers, ...action.payload],
			}
		case 'REMOVE_CUSTOMER_BY_NAME':
			return {
				...state,
				customers: state.customers.filter(
					customer => customer.name !== action.payload
				),
			}
		case 'REMOVE_CUSTOMER_BY_ID':
			return {
				...state,
				customers: state.customers.filter(
					customer => customer.id !== action.payload
				),
			}
		default:
			return state
	}
}

export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload })
export const addManyCustomersAction = payload => ({
	type: ADD_MANY_CUSTOMERS,
	payload,
})
export const removeCustomerByIdAction = payload => ({
	type: REMOVE_CUSTOMER_BY_ID,
	payload,
})
export const removeCustomerByNameAction = payload => ({
	type: REMOVE_CUSTOMER_BY_NAME,
	payload,
})
export const fetchCustomersAction = () => ({
	type: FETCH_CUSTOMERS,
})
