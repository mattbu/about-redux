import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('#number')

number.innerText = 0

const ADD = 'add'
const MINUS = 'minus'

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count += 1
    case MINUS:
      return count -= 1
    default:
      return count
  }
}

const countStore = createStore(countReducer)

const onChange = () => {
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

add.addEventListener('click', () => countStore.dispatch({ type: 'add'}))
minus.addEventListener('click', () => countStore.dispatch({ type: 'minus'}))
 