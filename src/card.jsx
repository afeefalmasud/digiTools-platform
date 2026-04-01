import { useState } from "react"
import { toast } from "react-toastify";

export default function Card({card,carts, setCarts}){
  const [isBought, setIsBought] = useState(false);
  const handleBought= () =>{
    const isFound = carts.find(item => item.id === card.id)
    if(isFound){
      toast.error('Item already added')
      return;
    }
    setIsBought(true);
    setCarts([...carts,card]);
    toast.success('Item added on the cart')
  }
  let color = '';
  let bg = '';
  let border = ''
  if (card.tag === 'popular') {
    color = 'text-purple-600';
    bg = 'bg-[#E1E7FF]';
    border = 'border-purple-300'
  } else if (card.tag === 'new') {
    color = 'text-green-600';
    bg = 'bg-green-100';
    border = 'border-green-300'
  } else if (card.tag === 'best seller') {
    color = 'text-orange-600';
    bg = 'bg-orange-100';
    border = 'border-orange-300'
  }
  return(
    <div>
      <div className={`p-6 shadow-md bg-[#ffffff] rounded-lg border-t-3 ${border} flex flex-col`}>
        <div className="flex justify-end mb-7">
          <div className={`${color} ${bg} w-fit px-5 py-2 rounded-full`}>
            <p className='font-bold text-[14px] uppercase'>{card.tag}</p>
          </div>
        </div>
        <div>
          <p className="text-3xl mb-4">{card.icon}</p>
        </div>
        <h2 className="text-[#101727] font-bold text-[24px] mb-4">{card.name}</h2>
        <p className="text-[#627382] mb-4 w-70 md:w-90">{card.description}</p>
        <h2 className="text-[#101727] font-bold text-[24px] mb-4">$ {card.price}<span className="text-[#627382] font-normal text-[16px]">/{card.period}</span></h2>
        <ul>
          {card.features.map((feature,i) => 
            <li key={i}><i className="fa-solid fa-check text-[#30B868] mr-2"></i>{feature}</li>
          )}
        </ul>
        <button onClick={handleBought} className={`btn px-25 md:px-33 py-4 rounded-full border-none text-white font-semibold my-4 hover:opacity-85
          ${
            isBought ? 'bg-green-600' : 'bg-linear-65 from-[#4F39F6] to-[#9514FA]'
          }`}> {isBought ? 'Added On The Carts' : 'Buy Now'}</button>
      </div>
    </div>
  )
}