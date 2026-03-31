import './App.css'
import Navbar from './navbar'
import Hero from './hero'
import Info from './info'
import Start from './start'
import Pricing from './pricing'
import Testimonial from './testimonial'
import Footer from './footer'
import Product from './product'
import { useState } from 'react'
import Cart from './cart'

const getCards = async () => {
  const res = await fetch('./card.json');
  return res.json();
}
const cardsPromise = getCards();
function App() {
  const [activeTab, setActiveTab] = useState('card');
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Hero></Hero>
      <Info></Info>
      <div className="mt-30 mb-4">
        <div className="text-center mb-4">
          <h1 className="text-[#101727] font-extrabold text-[48px] mb-4">Premium Digital Tools</h1>
          <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
        </div>
      </div>
      <div className="tabs tabs-box justify-center items-center bg-white">
        <input type="radio" name="my_tabs_1" className="tab px-6 rounded-full" aria-label="Products" onClick={() => setActiveTab('card')} defaultChecked/>
        <input type="radio" name="my_tabs_1" className="tab px-6 rounded-full" aria-label={`Carts (${carts.length})`} onClick={() => setActiveTab('cart')}/>
      </div>
      <div id='product-section'>
        {activeTab === 'card' && <Product cardsPromise={cardsPromise} carts={carts} setCarts={setCarts}></Product>}
        {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}
      </div>
      <div id='start-section'>
        <Start></Start>
      </div>
      <div id='pricing-section'>
        <Pricing></Pricing>
      </div>
      <div id='testimonial-section'>
        <Testimonial></Testimonial>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
