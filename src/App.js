import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Narbar from './Narbar';
import {useState,useEffect} from 'react'
import CounterText from './CounterText';

function App() {
const [count, setCount] = useState(0)

useEffect(()=>{
console.log("NEW COUNT")
},[count])

const increaseCount = ()=>{
  setCount(count+1)
}



  return (
    <>
    <Narbar/>
<h2>Night Club Counter</h2>
<button onClick={increaseCount}>+</button>
<button>-</button>
<div>
 <CounterText 
 peopleCount={count}
 />
</div>

    </>
  );
}

export default App;
