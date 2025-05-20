import FB from "../svgs/FB"
import IG from "../svgs/IG"
import Location from "../svgs/Location"
import TopFaded from "../svgs/TopFaded"
import YT from "../svgs/YT"

const Footer = () => {
    return (
        <div className="relative mt-80 w-[90%] xl:w-[60%] mx-auto rounded-3xl h-auto min-h-[16rem] sm:min-h-[20rem]">
            <TopFaded className="w-[350px] lg:w-[1400px]" />
            <div className="absolute left-6 sm:left-6 md:left-8 lg:left-12 xl:left-22 -top-8 sm:-top-20 md:-top-20 text-6xl md:text-7xl lg:text-8xl xl:text-[130px] text-black font-instrument z-10">
                maxico
            </div>

            <div className="absolute w-full h-full bg-linear-to-bl from-white to-pink-500 rounded-3xl z-0" />
            <div className="absolute top-[2px] left-[2px] w-[99.6%] h-[98.4%] bg-theme rounded-3xl z-0">
                <div className="absolute bg-[url(/svgs/rays-faded.svg)] w-full bg-no-repeat bg-cover rounded-3xl bg-theme h-[100%] z-0" />
            </div>

            <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 z-10">
                <h1 className="
                text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-bold font-retro
                text-transparent
                bg-clip-text
                bg-[url(/imgs/hair.png)]
                ">
                    SALON
                </h1>

                <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-4 mt-4 sm:mt-6 md:mt-8">
                    <div className="flex flex-row sm:flex-row gap-2 sm:gap-4 items-center md:items-start sm:items-center">
                        <Location />
                        <div className="text-black text-sm sm:text-base md:text-lg lg:w-80 xl:100">
                            Sunrise Beauty Lounge, 24 Elora Street, Green Park, New Delhi, 110016
                        </div>
                    </div>

                    <div className="flex flex-row items-start sm:items-center mt-10 lg:mt-0 gap-2 sm:gap-4">
                        <span className="text-xl w-full sm:text-2xl md:text-3xl text-black font-disca">
                            FOLLOW US
                        </span>
                        <div
                            className={`relative bg-gradient-to-b from-white to-pink-500 w-full sm:w-[150px] md:w-[200px] h-8 sm:h-10 p-[1px] rounded-lg `}
                        >
                            <div className="absolute inset-[1px] bg-white rounded-[7px] z-0" />

                            <div className="absolute inset-[3px] bg-semipink blur-md rounded-[6px] z-[1]" />

                            <div className="relative z-20 w-[220px] flex items-center h-full px-3">
                                <div className="absolute flex items-center right-10 lg:right-12 bottom-4 gap-2 z-10">
                                    <IG />
                                    <FB />
                                    <YT />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
