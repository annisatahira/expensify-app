import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes/AppRouter.js'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(setTextFilter("water"));
// store.dispatch(setTextFilter("water"));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'))
