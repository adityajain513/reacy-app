import {useSelector} from 'react-redux'
function Coin() {
    const coin=useSelector((state)=>state.counter.count)
    const textcolor=useSelector((state)=>state.theme.color)
  return (
    <div>
        <h3 style={{color:textcolor}}>coin:{coin}</h3>
    </div>
  )
}

export default Coin