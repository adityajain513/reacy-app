import {useDispatch,useSelector} from 'react-redux';
import {decrement,increment} from './counterSlice';

function Counter() {
    const count = useSelector((state)=>state.counter.count)
    const textcolor=useSelector((state)=>state.theme.color)

    const dispatch= useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch (increment())}>Plus + </button>
      <h3 style={{color:textcolor}}>Count : {count}</h3>
      <button onClick={()=>dispatch (decrement()) }>minus - </button>
    </div>
  )
}

export default Counter;