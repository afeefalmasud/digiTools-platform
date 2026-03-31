import { useState } from "react"
import { toast } from "react-toastify";

export default function Card({card,carts, setCarts}){
  const [isBought, setIsBought] = useState(false);
  const handleBought= () =>{
    setIsBought(true);
    const isFound = carts.find(item => item.id === card.id)
    if(isFound){
      toast.error('Item already added')
      return;
    }
    setCarts([...carts,card]);
    toast.success('Item added on the cart')
  }
  let color = '';
  let bg = '';
  if (card.tag === 'popular') {
    color = 'text-purple-600';
    bg = 'bg-[#E1E7FF]';
  } else if (card.tag === 'new') {
    color = 'text-green-600';
    bg = 'bg-green-100';
  } else if (card.tag === 'best seller') {
    color = 'text-orange-600';
    bg = 'bg-orange-100';
  }
  return(
    <div>
      <div className="p-6 shadow-md bg-[#ffffff] rounded-lg border-2 border-[#F1F1F1] flex flex-col">
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
        {card.features.map(feature => 
          <ul>
            <li><i className="fa-solid fa-check text-[#30B868] mr-2"></i>{feature}</li>
          </ul> 
        )}
        <button onClick={handleBought} className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-25 md:px-33 py-4 rounded-full border-none text-white font-semibold my-4">{isBought ? 'Added On The Carts' : 'Buy Now'}</button>
      </div>
    </div>
  )
}