import Image from "next/image"
import { cardData } from "@/constant/portfolioData"

const PortfolioCard = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 py-10">
            {cardData.map((card) => (
                <div key={card.id} className="bg-white/20 backdrop-blur-sm lg:h-[300px] xl:h-[350px] w-[250px] lg:w-[200px] xl:w-[250px] border-1 p-5 border-white/50 rounded-xl">
                    <Image
                        src={card.src}
                        alt="hekk"
                        width={600}
                        height={600}
                    />
                    <p className="pl-3 mt-2 lg:text-sm text-bold font-[900]">{card.text}</p>
                </div>
            ))
            }
        </div >
    )
}

export default PortfolioCard
