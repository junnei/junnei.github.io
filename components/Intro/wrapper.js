export default function Wrapper({children}) {
    return (
        <>
            <div className="pt-10vh">
            </div>
            <div className="px-5vw mb-10vh py-10vh mx-10vw md:mx-0 h-30vh md:w-50vh bg-gradient-to-br from-yellow-400 via-green-500 to-indigo-500"> 
                <h1 className="intro-hero-hover z-10 absolute text-gray-100 md:bg-gradient-to-r md:from-red-500 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight transform lg:-translate-y-4 md:pr-4">
                    SEONG JUN
                </h1>
                <h1 className="intro-sub-hover absolute pt-10vh text-gray-50 text-6xl lg:text-6xl font-bold">JANG</h1>
            </div>
            <div className="h-50vh">
                {children}
            </div>
        </>
    )
  }
  