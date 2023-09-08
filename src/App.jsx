import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash)

	const addCash = cash => {
		dispatch({ type: 'ADD_CASH', payload: cash })
	}

	const getCash = cash => {
		dispatch({ type: 'GET_CASH', payload: cash })
	}

	return (
		<div>
			<h1>Balance: {cash}</h1>
			<div>
				<button onClick={() => addCash(Number(prompt()))}>Top up</button>
				<button onClick={() => getCash(Number(prompt()))}>Withdraw</button>
			</div>
		</div>
	)
}

export default App
