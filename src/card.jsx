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
    toast.success('Item added to cart')
  }
  return(
    <div>
      <div className="p-6 shadow-md bg-[#ffffff] rounded-lg border-2 border-[#F1F1F1] flex flex-col">
        <div className="flex justify-end mb-7">
          <p className="text-[#0A883E] font-bold text-[14px]">{card.tag}</p>
        </div>
        <div>
          <p className="text-3xl mb-4">{card.icon}</p>
        </div>
        <h2 className="text-[#101727] font-bold text-[24px] mb-4">{card.name}</h2>
        <p className="text-[#627382] mb-4 w-90">{card.description}</p>
        <h2 className="text-[#101727] font-bold text-[24px] mb-4">$ {card.price}<span className="text-[#627382] font-normal text-[16px]">/{card.period}</span></h2>
        {card.features.map(feature => 
          <ul>
            <li><i className="fa-solid fa-check text-[#30B868] mr-2"></i>{feature}</li>
          </ul> 
        )}
        <button onClick={handleBought} className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-33 py-4 rounded-full border-none text-white font-semibold my-4">{isBought ? 'Added To Cart' : 'Buy Now'}</button>
      </div>
    </div>
  )
}