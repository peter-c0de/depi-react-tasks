import TheHeader from './components/TheHeader/TheHeader'
import TheFooter from './components/The Footer/TheFooter'

import './App.css'

function App() {
  return (
    <div className='app'>
      <TheHeader />
      <main>
        <section>
          <h2>Hello React.js</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores unde quidem, ea eius reprehenderit ut a odio eum asperiores, aliquam obcaecati sequi cupiditate adipisci, porro aliquid accusamus laudantium neque!</p>
        </section>
      </main>
      <TheFooter />
    </div>
  )
}

export default App
