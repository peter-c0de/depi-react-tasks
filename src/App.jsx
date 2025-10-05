import { useEffect, useState } from "react";
import TheHeader from './components/TheHeader/TheHeader'
import TheFooter from './components/The Footer/TheFooter'

import './App.css'

const headerLinks = [
  { title: "Shop", path: "/shop"},
  { title: "On Sale", path: "/on-sale"},
  { title: "New Arrivals", path: "/new-arrivals"},
  { title: "Brands", path: "/brands"},
  { title: "White Friday", path: "/white-friday"},
];

function App() {
  // 1st Hook: useState Hook
  const [counter, setCounter] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  console.log("showHeader: ", showHeader);

  // const handleIncrease = () => setCounter( (preValue) => ++preValue );
  // const handleDecrease = () => setCounter( (preValue) => --preValue );
  // const handleReset = () => setCounter( 0 );

  const handleCounterButtons = (type, value) => {
    if (type==="+") setCounter( (preValue) => preValue+value );
    else if (type==="-") setCounter( (preValue) => preValue-value );
    else setCounter( 0 );
  }

  // Component Lifecycle Steps:
  // 1. Mount  === Created
  // 2. Updated
  // 3. UnMount === Deleted

  // Not available since : React 19
  console.log("Hello from Before useEffect");
  // Will be fired everytime
  useEffect( ()=>{
    console.log("Hello from useEffect 0");
  });
  // Will be fired once after mount
  useEffect( ()=>{
    console.log("Hello from useEffect 1");
  }, []);
  // Will be fired after mount and every change in counter state
  useEffect( ()=>{
    console.log("Hello from useEffect 2");
  }, [counter]);
  console.log("Hello from After useEffect");

  return (
    <div className='app'>
      <h1>Hello React</h1> 
      <button onClick={ ()=>setShowHeader(prev=>!prev) }>
        Toggle Show Title
      </button>
      { showHeader && <TheHeader headerLinks={headerLinks} /> }
      <main>
        <section>
          <h2>Hello React.js</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores unde quidem, ea eius reprehenderit ut a odio eum asperiores, aliquam obcaecati sequi cupiditate adipisci, porro aliquid accusamus laudantium neque!</p>
        </section>
        <section>
          <h2>Counter</h2>
          <span>{counter}</span>
          <div className="buttons-wrapper">
            {/* <button onClick={()=> setCounter( (value)=>console.log(value) )}>increase</button> */}
            {/* <button onClick={ handleIncrease }>increase</button> */}
            <button onClick={ ()=>handleCounterButtons("+", 5) }>increase 5</button>

            {/* <button onClick={()=>console.log("decrease")}>decrease</button> */}
            {/* <button onClick={ handleDecrease }>decrease</button> */}
            <button onClick={ ()=>handleCounterButtons("-", 5) }>decrease 5</button>

            {/* <button onClick={()=>console.log("reset")}>reset</button> */}
            {/* <button onClick={ handleReset }>reset</button> */}
            <button onClick={ ()=>handleCounterButtons("0") }>reset</button>
          </div>
        </section>
      </main>
      <TheFooter />
    </div>
  )
}

export default App
