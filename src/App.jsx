import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {plus,minus} from './redux/counter'
import { useEffect } from 'react'
import { apiCall, apiCall2 } from './redux/call'

function App() {
  const count = useSelector(state=>state.counter.value)
  const list = useSelector(state=>state.call?.list)
  const dispatch = useDispatch()
  
  const increment = ()=> dispatch(plus(2))
  const decrement = ()=> dispatch(minus())
  function callMan(){
    dispatch(apiCall2())
  }
  useEffect(()=>{
    
  },[])


  return (
    <div className="App">
      {count}
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>

      <div>
        <button onClick={callMan}>call</button>

        {list.map((item)=>(
          <div>
            <div>id : {item.id}</div>
            <div>name : {item.name}</div>
          </div>
        ))}
        
      </div>
    </div>

  )
}

export default App


