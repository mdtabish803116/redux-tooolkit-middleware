import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount, resetCount } from './redux/slices/counterSlice'


function App() {
  const {value} = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
   <div>
      <p>Counter : {value}</p>
      <button onClick = {() => dispatch(increaseCount(2))}>increase Count</button>
      <button onClick = {() => dispatch(decreaseCount(3))}>decrease Count</button>
      <button onClick = {() => dispatch(resetCount())}>Reaset Count</button>
   </div>
  )
}

export default App
