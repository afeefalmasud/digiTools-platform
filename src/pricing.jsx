export default function Pricing(){
  return(
    <div className="container mx-auto min-h-screen px-5 md:px-0">
      <div className="pt-30 pb-30">
        <div className="text-center mb-10">
          <h1 className="text-[#101727] font-extrabold text-[42px] md:text-[48px]  mb-4">Simple, Transparent Pricing</h1>
          <p className="text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10 gap-y-10 md:gap-y-0">
          <div className="py-5 px-8 flex flex-col shadow-md bg-[#F9FAFC] rounded-2xl border-2 border-[#F2F2F2] w-80 md:w-95">
            <h2 className="text-[#101727] font-bold text-[24px] mb-2">Starter</h2>
            <p className="text-[#627382] mb-6">Perfect for getting started</p>
            <h2 className="text-[#101727] font-bold text-[40px] mb-6">$0 <span className="text-[#627382] font-normal text-[16px]">/month</span></h2>
            <ul className="text-[#627382] font-medium mb-20">
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Access to 10 free tools</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Basic templates</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Community support</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>1 project per month</li>
            </ul>
            <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 rounded-full border-none text-white font-semibold">Get Started Free</button>
          </div>

          <div className="py-5 px-8 flex flex-col shadow-md bg-linear-65 from-[#4F39F6] to-[#9514FA] rounded-2xl w-80 md:w-95 relative">
            <div className="bg-[#FEF3C6] rounded-full px-3 py-1.5 w-fit absolute left-25 -top-4 md:left-35">
              <p className="text-[#BB4D00] font-medium text-[14px]">Most Popular</p>
            </div>
            <h2 className="text-[#ffffff] font-bold text-[24px] mb-2">Pro</h2>
            <p className="text-[#ffffff] mb-6">Best for professionals</p>
            <h2 className="text-[#ffffff] font-bold text-[40px] mb-6">$29 <span className="text-[#ffffff] font-normal text-[16px]">/month</span></h2>
            <ul className="text-[#ffffff] font-medium mb-6">
              <li><i className="fa-solid fa-check"></i>Access to all premium tools</li>
              <li><i className="fa-solid fa-check"></i>Unlimited templates</li>
              <li><i className="fa-solid fa-check"></i>Priority support</li>
              <li><i className="fa-solid fa-check"></i>Unlimited projects</li>
              <li><i className="fa-solid fa-check"></i>Cloud sync</li>
              <li><i className="fa-solid fa-check"></i>Advanced analytics</li>
            </ul>
            <div className="bg-white rounded-full flex items-center justify-center">
              <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 border-none rounded-full bg-clip-text text-transparent font-semibold w-full">Get Started Free</button>
            </div>
          </div>

          <div className="py-5 px-8 flex flex-col shadow-md bg-[#F9FAFC] rounded-2xl border-2 border-[#F2F2F2] w-80 md:w-95">
            <h2 className="text-[#101727] font-bold text-[24px] mb-2">Enterprise</h2>
            <p className="text-[#627382] mb-6">For teams and businesses</p>
            <h2 className="text-[#101727] font-bold text-[40px] mb-6">$99 <span className="text-[#627382] font-normal text-[16px]">/month</span></h2>
            <ul className="text-[#627382] font-medium mb-6">
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Everything in Pro</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Team collaboration</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Custom integrations</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Dedicated support</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>SLA guarantee</li>
              <li><i className="fa-solid fa-check text-[#30B868]"></i>Custom branding</li>
            </ul>
            <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 rounded-full border-none text-white font-semibold">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  )
}