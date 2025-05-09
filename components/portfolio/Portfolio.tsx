import PortfolioCard from "./PortfoilioCard"

const Portfolio = () => {
    return (
        <div className="relative mt-40 mx-auto rounded-3xl w-[80%] xl:w-[60%] h-full p-[2px] bg-gradient-to-t from-[#FF67B6]/60 to-[#FBFBFB]/80 to-[40%] hover:opacity-90 transition">

            <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <div className="absolute inset-0 bg-theme rounded-[22px]" />

                <div
                    className="absolute inset-0 bg-[url(/svgs/eqipments.svg)] rounded-[22px] opacity-40"
                    style={{ backgroundSize: 'cover' }}
                />

                <div className="absolute inset-0 bg-white/40 rounded-[22px] hover:opacity-90 transition" />

                <div className="relative z-10 h-full flex items-center justify-center text-xl text-black">
                    <PortfolioCard />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
