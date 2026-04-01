export default function Footer(){
  return(
    <div className="bg-[#101727] px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-[#ffffff] pt-30 pb-10 flex flex-col lg:flex-row items-center  lg:items-start justify-center lg:justify-around space-y-8 lg:space-y-0">
          <div className="text-center lg:text-start">
            <h1 className="font-extrabold text-[40px] mb-4">DigiTools</h1>
            <p className="text-[#ffffffcf]">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
          </div>
          <div className="space-y-4 text-[#ffffffcf]">
            <h2 className="text-[20px] font-medium">Products</h2>
            <ul className="space-y-4">
              <li className="hover:text-[#9514FA]"><a href="">Features</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Pricing</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Templates</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Integrations</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-[20px] font-medium">Company</h2>
            <ul className="space-y-4 text-[#ffffffcf]">
              <li className="hover:text-[#9514FA]"><a href="">About</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Blog</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Careers</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Press</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-[20px] font-medium">Resources</h2>
            <ul className="space-y-4 text-[#ffffffcf]">
              <li className="hover:text-[#9514FA]"><a href="">Documentation</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Help Center</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Community</a></li>
              <li className="hover:text-[#9514FA]"><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-[20px] font-medium">Social Links</h2>
            <div className="flex gap-2">
              <div className="px-2.5 py-2 w-fit rounded-full bg-[#ffffff] cursor-pointer hover:-translate-y-2 transition">
                <i className="fa-brands fa-instagram text-[#101727]"></i>
              </div>
              <div className="px-2.5 py-2 w-fit rounded-full bg-[#ffffff] cursor-pointer hover:-translate-y-2 transition">
                <i className="fa-brands fa-facebook-f text-[#101727]"></i>
              </div>
              <div className="px-2.5 py-2 w-fit rounded-full bg-[#ffffff] cursor-pointer hover:-translate-y-2 transition">
                <i className="fa-brands fa-x-twitter text-[#101727]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#ffffffcf] flex flex-col lg:flex-row justify-between pt-7.5 pb-10 border-t-2 border-[#646464b2] mx-15 space-y-8 lg:space-y-0 items-center lg:items-start">
          <p className="text-center lg:text-start">© 2026 Afeef Al Masud | Digitools. All rights reserved.</p>
          <ul className="flex flex-col lg:flex-row gap-4">
            <li className="hover:text-[#9514FA]"><a href="">Privacy Policy</a></li>
            <li className="hover:text-[#9514FA]"><a href="">Terms of Service</a></li>
            <li className="hover:text-[#9514FA]"><a href="">Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}