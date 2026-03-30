export default function Hero(){
  return(
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-21.25">
        <div>
          <div className="flex items-center gap-2 bg-[#E1E7FF] px-4 py-2 rounded-full w-fit mb-4">
            <div className="bg-linear-65 from-[#4f39f6b0] to-[#9614faab] w-3 h-3 rounded-full"></div>
            <p className="bg-linear-65 from-[#4f39f6] to-[#9614fa] bg-clip-text text-transparent font-medium">New: AI-Powered Tools Available</p>
          </div>
          <h1 className="text-[72px] font-extrabold text-[#101727] mb-4">Supercharge Your <br></br> Digital Workflow</h1>
          <p className="text-[#627382] text-[18px] mb-8">Access premium AI tools, design assets, templates, and productivity <br></br> software—all in one place. Start creating faster today.
          </p>
          <div>
            <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] px-4 py-3.5 rounded-full text-white font-semibold mr-4 explore-btn hover:-translate-y-1 transition">Explore Products</button>
            <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent px-4 py-3.5 rounded-full border-2 border-[#7f14fa] font-semibold hover:-translate-y-1 transition">
              <img src="./Play.png" alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src="./banner.png" alt="" />
        </div>
      </div>
    </div>
  )
}