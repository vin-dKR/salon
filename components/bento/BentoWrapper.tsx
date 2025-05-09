import Image from "next/image";
import ServiceCard from "./BentoCard";
import { services } from "@/constant/bentoData"

const BentoWrapper = () => {
    return (
        <div className="mt-80 w-full">
            <div className="relative flex items-center justify-center">
                <p className="text-black text-3xl">Service we offer</p>
                <Image
                    src="/imgs/bento/header.png"
                    alt="bento-header"
                    width={500}
                    height={500}
                    className="absolute"
                />
            </div>

            <div className="relative mt-40 w-[90%] xl:w-[60%] mx-auto rounded-3xl border border-white/20">
                <div
                    className="absolute inset-0 object-cover mix-blend-overlay opacity-50 bg-[url('/imgs/bento/noise.png')] z-0 pointer-events-none"
                />

                <div className="bg-semipink/30 rounded-3xl p-6 flex flex-col lg:flex-row gap-6 h-full">
                    {/* Left Half: 2 columns in first row, full width in second row */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        {/* First Row: 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.slice(0, 2).map((item, index) => (
                                <ServiceCard key={index} item={item} />
                            ))}
                        </div>
                        {/* Second Row: Full width */}
                        <div className="h-60">
                            <ServiceCard item={services[4]} />
                        </div>
                    </div>

                    {/* Right Half: 2 columns with specified height ratios */}
                    <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 h-full md:h-[580px]">
                        {/* First Column: 60% top, 40% bottom */}
                        <div className="w-full sm:w-1/2 flex flex-col gap-6 ">
                            <div className="h-[60%] overflow-hidden">
                                <ServiceCard item={services[2]} />
                            </div>
                            <div className="h-[40%] overflow-hidden">
                                <ServiceCard item={services[5]} />
                            </div>
                        </div>
                        {/* Second Column: 30% top, 70% bottom */}
                        <div className="w-full sm:w-1/2 flex flex-col gap-6 h-full min-h-0">
                            <div className="h-[40%] overflow-hidden">
                                <ServiceCard item={services[3]} />
                            </div>
                            <div className="h-[70%] overflow-hidden">
                                <ServiceCard item={services[6]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoWrapper;
