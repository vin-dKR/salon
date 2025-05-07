import TopFaded from "../svgs/TopFaded"
import Navbar from "./Navbar"

const LandingHome = () => {
    return (
        <div>
            <div className="">
                <TopFaded className="w-[350px] lg:w-[1400px]" />
            </div>

            <Navbar />

            <div className="relative flex flex-col w-[90%] lg:w-[70%] left-1/2 -translate-x-[50%] bg-black w-full">
                <div className="text-4xl lg:text-[200px] font-instrument mt-32">
                    mexico
                </div>

                <h1 className="
                text-8xl font-bold
                text-transparent
                bg-clip-text
                bg-gradient-to-r from-pink-500 to-blue-500
                ">
                    GRADIENT TEXT
                </h1>
            </div>
        </div>
    )
}

export default LandingHome
