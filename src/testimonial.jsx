export default function Testimonial(){
  return(
    <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-[#ffffff] py-30 flex flex-col items-center text-center">
          <h1 className="font-extrabold text-[35px] md:text-[40px] mb-4">Ready to Transform Your Workflow?</h1>
          <p className="text-[#ffffffcf] mb-10">Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
          <div className="flex gap-4">
            <div className="bg-white rounded-full flex items-center justify-center hover:-translate-y-2 transition">
              <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 border-none rounded-full bg-clip-text text-transparent font-semibold w-full">Explore Products</button>
            </div>
            <button className="btn text-[#ffffff] bg-transparent border-2 rounded-full px-4 py-3.5 hover:-translate-y-2 transition">View Pricing</button>
          </div>
          <p className="text-[#ffffffcf] mt-4">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  )
}