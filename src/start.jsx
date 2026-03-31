export default function Start(){
  return(
    <div className="min-h-screen bg-[#F9FAFC]">
      <div className="container mx-auto pt-30">
        <div className="text-center mb-10">
          <h1 className="text-[#101727] font-extrabold text-[48px] mb-4">Get Started in 3 Steps</h1>
          <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 justify-center">
          <div className="py-5 px-8 flex flex-col shadow-md bg-[#ffffff] rounded-lg border-2 border-[#F1F1F1]">
            <div className="flex justify-end mb-7">
              <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3 w-fit rounded-full">
                <p className="text-white font-bold text-[14px]">01</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="p-5 bg-[#e9e7ff] w-fit rounded-full mb-4">
                <img src="./user.png" alt="" />
              </div>
              <h2 className="text-[#101727] font-bold text-[24px] mb-4">Create Account</h2>
              <p className="text-[#627382] mb-22 text-center">Sign up for free in seconds. No credit card <br /> required to get started.</p>
            </div>
          </div>
          
          <div className="py-5 px-8 flex flex-col shadow-md bg-[#ffffff] rounded-lg border-2 border-[#F1F1F1]">
            <div className="flex justify-end mb-7">
              <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3 w-fit rounded-full">
                <p className="text-white font-bold text-[14px]">02</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="p-5 bg-[#e9e7ff] w-fit rounded-full mb-4">
                <img src="./package.png" alt="" />
              </div>
              <h2 className="text-[#101727] font-bold text-[24px] mb-4">Choose Products</h2>
              <p className="text-[#627382] mb-22 text-center">Browse our catalog and select the tools <br /> that fit your needs.</p>
            </div>
          </div>

          <div className="py-5 px-8 flex flex-col shadow-md bg-[#ffffff] rounded-lg border-2 border-[#F1F1F1]">
            <div className="flex justify-end mb-7">
              <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3 w-fit rounded-full">
                <p className="text-white font-bold text-[14px]">03</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="p-5 bg-[#e9e7ff] w-fit rounded-full mb-4">
                <img src="./rocket.png" alt="" />
              </div>
              <h2 className="text-[#101727] font-bold text-[24px] mb-4">Start Creating</h2>
              <p className="text-[#627382] mb-22 text-center">Download and start using your premium <br></br> tools immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}