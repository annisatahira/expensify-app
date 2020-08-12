import { createStore } from 'redux'

//Action generators - functions that return action object

//example

// const add = ({ a, b }, c) => {
//   return a + b + c
// }

// console.log(add({ a: 1, b: 12 }, 100))

//add function for action

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const reset = () => ({
  type: 'RESET',
})

const set = ({ count }) => ({
  type: 'SET',
  count,
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      }
    case 'SET':
      return {
        count: action.count,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))
//apabila menggunakan cara ini typo tiidak akan terdeteksi
// store.dispatch({
//   type: 'INCREMENT',
// })

//menggunakan function
store.dispatch(incrementCount())

store.dispatch(reset())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(set({ count: -101 }))
