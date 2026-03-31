export default function Info(){
  return(
    <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around py-15 space-y-6">
          <div>
            <h2 className="font-extrabold text-[60px] text-white mb-3">50K+</h2>
            <p className="font-medium text-[24px] text-[#cdcccc]">Active Users</p>
          </div>
          <div>
            <h2 className="font-extrabold text-[60px] text-white mb-3">200+</h2>
            <p className="font-medium text-[24px] text-[#cdcccc]">Premium Tools</p>
          </div>
          <div>
            <h2 className="font-extrabold text-[60px] text-white mb-3">4.9</h2>
            <p className="font-medium text-[24px] text-[#cdcccc]">Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}