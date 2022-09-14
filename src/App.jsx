import { useState, useEffect } from 'react'
import { useSyncExternalStore } from 'react'
import store from './store'
import './App.css'

const useStore = (selector = (state) => state) => (
  useSyncExternalStore(store.subscribe, () => selector(store.getState()))
)

const IncrementIcon = ({ item }) => (
  <button
    onClick={() => {
      const state = store.getState();
      store.setState({
        ...state,
        [item]: Number(state[item]) + 1
      })
    }
    }
  >Increment--{item}
  </button>
)

const Displayvalue = ({ item }) => (
  <div>{item}  = {useStore(state => state[item])}</div>
)


function App() {
  return (
    <div className="container">
      <IncrementIcon item='value1' />
      <Displayvalue item='value1' />
      <IncrementIcon item='value2' />
      <Displayvalue item='value2' />
    </div>
  )
}

export default App
