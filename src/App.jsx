import { useState } from "react";
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

  // const handleIncrease = () => setCounter( (preValue) => ++preValue );
  // const handleDecrease = () => setCounter( (preValue) => --preValue );
  // const handleReset = () => setCounter( 0 );

  const handleCounterButtons = (type, value) => {
    if (type==="+") setCounter( (preValue) => preValue+value );
    else if (type==="-") setCounter( (preValue) => preValue-value );
    else setCounter( 0 );
  }

  return (
    <div className='app'>
      <TheHeader headerLinks={headerLinks} />
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
