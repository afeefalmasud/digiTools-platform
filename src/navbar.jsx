export default function Navbar({carts}){
  return(
    <div className="shadow-lg sticky top-0 z-50 bg-white">
      <div className="container mx-auto py-6.5">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div class="navbar-start mb-5 md:mb-0">
            <div class="dropdown mr-4">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-[#101727]">
                <li className="hover:text-[#9514FA]"><a href="#">Products</a></li>
                <li className="hover:text-[#9514FA]"><a href="#">Features</a></li>
                <li className="hover:text-[#9514FA]"><a href="#">Pricing</a></li>
                <li className="hover:text-[#9514FA]"><a href="#">Testimonials</a></li>
                <li className="hover:text-[#9514FA]"><a href="#">FAQ</a></li>
              </ul>
            </div>
            <h1 className="text-4xl font-extrabold bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="text-[#101727] flex font-semibold items-center gap-8">
              <li className="hover:text-[#9514FA]"><a href="#product-section">Products</a></li>
              <li className="hover:text-[#9514FA]"><a href="#start-section">Features</a></li>
              <li className="hover:text-[#9514FA]"><a href="#pricing-section">Pricing</a></li>
              <li className="hover:text-[#9514FA]"><a href="#testimonial-section">Testimonials</a></li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center md:justify-end items-center navbar-end">
            <div className="relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <div className="w-5 h-5 rounded-full text-[#ffffff] bg-[#FF3980] text-center absolute -top-3 -right-2">
                <p className="text-[14px]">{carts.length}</p>
              </div>
            </div>
            <a href="" className="text-[#101727] font-semibold hover:text-[#9514FA]">Login</a>
            <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 rounded-full border-none text-white font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}