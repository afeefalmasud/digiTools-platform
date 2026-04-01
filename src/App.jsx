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
      <div id='product-section' className='scroll-mt-30 pt-10 md:pt-0'>
        <div className="mt-30 mb-4 px-5 lg:px-0">
          <div className="text-center mb-4">
            <h1 className="text-[#101727] font-extrabold text-[42px] md:text-[48px] mb-4">Premium Digital Tools</h1>
            <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
          </div>
        </div>
      </div>
      <div className="tabs justify-center items-center bg-white">
        <input type="radio" name="my_tabs_1" className={`tab px-6 rounded-full transition-all ${
          activeTab === 'card'
          ? 'bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white'
          : 'text-[#627382]'
        }`}
        aria-label='Products' onClick={() => setActiveTab('card')} defaultChecked/>
        <input type="radio" name="my_tabs_1" className={`tab px-6 rounded-full transition-all ${
          activeTab === 'cart'
          ? 'bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white'
          : 'text-[#627382]'
        }`} aria-label={`Carts (${carts.length})`} onClick={() => setActiveTab('cart')}/>
      </div>
      {activeTab === 'card' && <Product cardsPromise={cardsPromise} carts={carts} setCarts={setCarts}></Product>}
      {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <div id='start-section' className='pt-20 md:pt-0'>
        <Start></Start>
      </div>
      <div id='pricing-section' className='pt-20 md:pt-0'>
        <Pricing></Pricing>
      </div>
      <div id='testimonial-section' className='scroll-mt-20 pt-20 md:pt-0' >
        <Testimonial></Testimonial>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
