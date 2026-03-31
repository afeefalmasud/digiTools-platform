import './App.css'
import Navbar from './navbar'
import Hero from './hero'
import Info from './info'
import Start from './start'
import Pricing from './pricing'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Info></Info>
      <div id='start-section'>
        <Start></Start>
      </div>
      <div id='pricing-section'>
        <Pricing></Pricing>
      </div>
      
    </>
  )
}

export default App
