import Image from "next/image";
import CardLight from "../svgs/BentoCardLight";


const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
    return (
        <div className="relative bg-white/30 backdrop-blur-sm  rounded-xl p-6 lg:p-4 flex flex-col h-full border border-white/20 overflow-hidden">
            <div className="absolute top-0 z-0">
                <CardLight />
            </div>

            <div className="w-full shadow-lg rounded-xl overflow-hidden mb-4 flex items-center justify-center z-[10]">
                <Image
                    src={item.image}
                    alt="item"
                    width={1000}
                    height={1000}
                />
            </div>

            <h3 className="text-lg font-bold text-pink-600">{item.title}</h3>
            <p className="text-[8px] text-gray-600">{item.description}</p>
        </div>
    );
};

export default ServiceCard
