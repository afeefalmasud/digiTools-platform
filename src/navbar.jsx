export default function Navbar(){
  return(
    <div className=" shadow-lg sticky top-0 z-50 bg-white">
      <div className="container mx-auto py-6.5">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
          <div>
            <ul className="flex text-[#101727] font-semibold items-center gap-8">
              <li className="hover:text-[#9514FA]"><a href="#">Products</a></li>
              <li className="hover:text-[#9514FA]"><a href="#">Features</a></li>
              <li className="hover:text-[#9514FA]"><a href="#">Pricing</a></li>
              <li className="hover:text-[#9514FA]"><a href="#">Testimonials</a></li>
              <li className="hover:text-[#9514FA]"><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <span className="material-symbols-outlined">shopping_cart</span>
            <a href="" className="text-[#101727] font-semibold hover:text-[#9514FA]">Login</a>
            <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 rounded-full border-none text-white font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}