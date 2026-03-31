import { toast } from "react-toastify";

export default function Cart({carts,setCarts}){
  const totalPrice = carts.reduce((sum, item) => sum+item.price,0)
  const handlePayment = () =>{
    setCarts([]);
    toast.success('Payment Successful')
  }
  const handleRemove = (item) =>{
    const filteredArray = carts.filter(c => c.id !== item.id);
    setCarts(filteredArray)
    toast.warning('Item removed from cart')
  }
  return(
    <div className="container mx-auto min-h-screen pt-10">
      <div className="rounded-2xl border-2 border-[#F2F2F2] shadow-md p-10 space-y-5">
        <h2 className="text-[#101727] font-bold text-[24px]">Your Cart</h2>
        {
          carts.length === 0 ? <p className="text-[#627382] font-bold text-[24px] text-center">Cart is empty</p> :
          <>
            {carts.map(item => 
              <div key={item.id}>
                <div className="bg-[#F9FAFC] flex justify-between p-5 shadow-md rounded-lg items-center">
                  <div className="flex gap-8 items-center">
                    <div>
                      <p className="text-3xl">{item.icon}</p>
                    </div>
                    <div>
                      <h2 className="text-[#101727] font-semibold text-[20px]">{item.name}</h2>
                      <p className="text-[#627382]">${item.price}</p>
                    </div>
                  </div>
                  <div>
                    <p onClick={() => handleRemove(item)} className="text-[#FF3980] font-bold cursor-pointer">Remove</p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <p className="text-[#627382]">Total:</p>
              <p className="text-[#101727] font-semibold text-[20px]">${totalPrice}</p>
            </div>
            <button onClick={handlePayment} className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] w-full py-6 rounded-full border-none text-white font-semibold my-4">Proceed to Checkout</button>
          </>
        }
      </div>
    </div>
  )
}